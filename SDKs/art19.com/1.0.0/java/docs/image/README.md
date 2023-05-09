# image

### Available Operations

* [getImages](#getimages) - Get a list of images
* [getImagesId](#getimagesid) - Get a specific image

## getImages

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesRequest;
import org.openapis.openapi.models.operations.GetImagesResponse;
import org.openapis.openapi.models.operations.GetImagesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesRequest req = new GetImagesRequest(                new String[]{{
                                add("8d67864d-bb67-45fd-9e60-b375ed4f6fbe"),
                                add("e41f3331-7fe3-45b6-8eb1-ea426555ba3c"),
                                add("28744ed5-3b88-4f3a-8d8f-5c0b2f2fb7b1"),
                                add("94a276b2-6916-4fe1-b08f-4294e3698f44"),
                            }});            

            GetImagesResponse res = sdk.image.getImages(req, new GetImagesSecurity("voluptate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getImages200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagesId

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesIdRequest;
import org.openapis.openapi.models.operations.GetImagesIdResponse;
import org.openapis.openapi.models.operations.GetImagesIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesIdRequest req = new GetImagesIdRequest("f603e8b4-45e8-40ca-95ef-d20e457e1858");            

            GetImagesIdResponse res = sdk.image.getImagesId(req, new GetImagesIdSecurity("cum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getImagesId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
