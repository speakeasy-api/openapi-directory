# Image

### Available Operations

* [GetImages](#getimages) - Get a list of images
* [GetImagesID](#getimagesid) - Get a specific image

## GetImages

An image represents a piece of artwork attached to some entity like a series, season, or episode,
and is _owned_ by an entity called the `bucket`.
An image is also a container for several `MediaAssets` representing the physical files for various
styles used.

## Media Asset Styles for Images

Most media assets use square images. You may upload and use a square image, or upload an image of any
shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
`x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
asset. If the original file is rectangular and does not have cropping, then the system will use a squared
version of the original file with the smaller of width or height as the square size.

The original image as uploaded into the system is always retained unmodified and available through
the style `original`. All media asset styles except `stripped-original` consist of the cropped image.

An image has media assets with the following styles:

- `original`: This is the original file provided. May not be available, depending on permissions
  and file type.
- `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
  This should be used for any application needing the original, uncropped, image.
- `regular`: If the image has cropping defined, this is the cropped image.
  If not, this is a square version of the original.
- `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
- `square-400`: A square version of the image with a size of `400x400` pixels.
- `square-640`: A square version of the image with a size of `640x640` pixels.
- `square-888`: A square version of the image with a size of `888x888` pixels.
- `square-3000`: A square version of the image with a size of `3000x3000` pixels.
  This variant is only created if the cropped width & height are each at least 3000.
- `itunes`: A square version of the image with a size of `1400x1400` pixels.

### Preferred image used in feeds

For the main series image used in feeds, it is ideal to use the `square-3000` version.
If that is not available, the `itunes` version should be used instead.



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Image.GetImages(ctx, operations.GetImagesRequest{
        Ids: []string{
            "ed4f6fbe-e41f-4333-97fe-35b60eb1ea42",
            "6555ba3c-2874-44ed-93b8-8f3a8d8f5c0b",
        },
    }, operations.GetImagesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImages200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetImagesID

An image represents a piece of artwork attached to some entity like a series, season, or episode,
and is _owned_ by an entity called the `bucket`.
An image is also a container for several `MediaAssets` representing the physical files for various
styles used.

## Media Asset Styles for Images

Most media assets use square images. You may upload and use a square image, or upload an image of any
shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
`x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
asset. If the original file is rectangular and does not have cropping, then the system will use a squared
version of the original file with the smaller of width or height as the square size.

The original image as uploaded into the system is always retained unmodified and available through
the style `original`. All media asset styles except `stripped-original` consist of the cropped image.

An image has media assets with the following styles:

- `original`: This is the original file provided. May not be available, depending on permissions
  and file type.
- `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
  This should be used for any application needing the original, uncropped, image.
- `regular`: If the image has cropping defined, this is the cropped image.
  If not, this is a square version of the original.
- `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
- `square-400`: A square version of the image with a size of `400x400` pixels.
- `square-640`: A square version of the image with a size of `640x640` pixels.
- `square-888`: A square version of the image with a size of `888x888` pixels.
- `square-3000`: A square version of the image with a size of `3000x3000` pixels.
  This variant is only created if the cropped width & height are each at least 3000.
- `itunes`: A square version of the image with a size of `1400x1400` pixels.

### Preferred image used in feeds

For the main series image used in feeds, it is ideal to use the `square-3000` version.
If that is not available, the `itunes` version should be used instead.



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Image.GetImagesID(ctx, operations.GetImagesIDRequest{
        ID: "2f2fb7b1-94a2-476b-a691-6fe1f08f4294",
    }, operations.GetImagesIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImagesID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
