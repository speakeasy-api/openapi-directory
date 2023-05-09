# Preprocessing

### Available Operations

* [PreprocessingBinarize](#preprocessingbinarize) - Convert an image of text into a binarized (light and dark) view
* [PreprocessingBinarizeAdvanced](#preprocessingbinarizeadvanced) - Convert an image of text into a binary (light and dark) view with ML
* [PreprocessingGetPageAngle](#preprocessinggetpageangle) - Get the angle of the page / document / receipt
* [PreprocessingUnrotate](#preprocessingunrotate) - Detect and unrotate a document image
* [PreprocessingUnrotateAdvanced](#preprocessingunrotateadvanced) - Detect and unrotate a document image (advanced)
* [PreprocessingUnskew](#preprocessingunskew) - Detect and unskew a photo of a document

## PreprocessingBinarize

Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.

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
    res, err := s.Preprocessing.PreprocessingBinarize(ctx, operations.PreprocessingBinarizeRequestBody{
        ImageFile: operations.PreprocessingBinarizeRequestBodyImageFile{
            Content: []byte("optio"),
            ImageFile: "totam",
        },
    }, operations.PreprocessingBinarizeSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreprocessingBinarize200ApplicationJSONByteString != nil {
        // handle response
    }
}
```

## PreprocessingBinarizeAdvanced

Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.

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
    res, err := s.Preprocessing.PreprocessingBinarizeAdvanced(ctx, operations.PreprocessingBinarizeAdvancedRequestBody{
        ImageFile: operations.PreprocessingBinarizeAdvancedRequestBodyImageFile{
            Content: []byte("beatae"),
            ImageFile: "commodi",
        },
    }, operations.PreprocessingBinarizeAdvancedSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreprocessingBinarizeAdvanced200ApplicationJSONByteString != nil {
        // handle response
    }
}
```

## PreprocessingGetPageAngle

Analyzes a photo or image of a document and identifies the rotation angle of the page.

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
    res, err := s.Preprocessing.PreprocessingGetPageAngle(ctx, operations.PreprocessingGetPageAngleRequestBody{
        ImageFile: operations.PreprocessingGetPageAngleRequestBodyImageFile{
            Content: []byte("molestiae"),
            ImageFile: "modi",
        },
    }, operations.PreprocessingGetPageAngleSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPageAngleResult != nil {
        // handle response
    }
}
```

## PreprocessingUnrotate

Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

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
    res, err := s.Preprocessing.PreprocessingUnrotate(ctx, operations.PreprocessingUnrotateRequestBody{
        ImageFile: operations.PreprocessingUnrotateRequestBodyImageFile{
            Content: []byte("qui"),
            ImageFile: "impedit",
        },
    }, operations.PreprocessingUnrotateSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreprocessingUnrotate200ApplicationJSONByteString != nil {
        // handle response
    }
}
```

## PreprocessingUnrotateAdvanced

Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

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
    res, err := s.Preprocessing.PreprocessingUnrotateAdvanced(ctx, operations.PreprocessingUnrotateAdvancedRequestBody{
        ImageFile: operations.PreprocessingUnrotateAdvancedRequestBodyImageFile{
            Content: []byte("cum"),
            ImageFile: "esse",
        },
    }, operations.PreprocessingUnrotateAdvancedSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreprocessingUnrotateAdvanced200ApplicationJSONByteString != nil {
        // handle response
    }
}
```

## PreprocessingUnskew

Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

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
    res, err := s.Preprocessing.PreprocessingUnskew(ctx, operations.PreprocessingUnskewRequestBody{
        ImageFile: operations.PreprocessingUnskewRequestBodyImageFile{
            Content: []byte("ipsum"),
            ImageFile: "excepturi",
        },
    }, operations.PreprocessingUnskewSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreprocessingUnskew200ApplicationJSONByteString != nil {
        // handle response
    }
}
```
