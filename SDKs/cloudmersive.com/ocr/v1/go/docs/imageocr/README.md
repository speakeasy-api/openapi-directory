# ImageOcr

### Available Operations

* [ImageOcrImageLinesWithLocation](#imageocrimagelineswithlocation) - Convert a scanned image into words with location
* [ImageOcrImageWordsWithLocation](#imageocrimagewordswithlocation) - Convert a scanned image into words with location
* [ImageOcrPhotoRecognizeBusinessCard](#imageocrphotorecognizebusinesscard) - Recognize a photo of a business card, extract key business information
* [ImageOcrPhotoRecognizeFormAdvanced](#imageocrphotorecognizeformadvanced) - Recognize a photo of a form, extract key fields using stored templates
* [ImageOcrPhotoRecognizeReceipt](#imageocrphotorecognizereceipt) - Recognize a photo of a receipt, extract key business information
* [ImageOcrPhotoToText](#imageocrphotototext) - Convert a photo of a document into text
* [ImageOcrPhotoWordsWithLocation](#imageocrphotowordswithlocation) - Convert a photo of a document or receipt into words with location
* [ImageOcrPost](#imageocrpost) - Convert a scanned image into text

## ImageOcrImageLinesWithLocation

Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrImageLinesWithLocation(ctx, operations.ImageOcrImageLinesWithLocationRequest{
        RequestBody: operations.ImageOcrImageLinesWithLocationRequestBody{
            ImageFile: operations.ImageOcrImageLinesWithLocationRequestBodyImageFile{
                Content: []byte("unde"),
                ImageFile: "nulla",
            },
        },
        Language: sdk.String("corrupti"),
        Preprocessing: sdk.String("illum"),
    }, operations.ImageOcrImageLinesWithLocationSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageToLinesWithLocationResult != nil {
        // handle response
    }
}
```

## ImageOcrImageWordsWithLocation

Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrImageWordsWithLocation(ctx, operations.ImageOcrImageWordsWithLocationRequest{
        RequestBody: operations.ImageOcrImageWordsWithLocationRequestBody{
            ImageFile: operations.ImageOcrImageWordsWithLocationRequestBodyImageFile{
                Content: []byte("vel"),
                ImageFile: "error",
            },
        },
        Language: sdk.String("deserunt"),
        Preprocessing: sdk.String("suscipit"),
    }, operations.ImageOcrImageWordsWithLocationSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageToWordsWithLocationResult != nil {
        // handle response
    }
}
```

## ImageOcrPhotoRecognizeBusinessCard

Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrPhotoRecognizeBusinessCard(ctx, operations.ImageOcrPhotoRecognizeBusinessCardRequestBody{
        ImageFile: operations.ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile{
            Content: []byte("iure"),
            ImageFile: "magnam",
        },
    }, operations.ImageOcrPhotoRecognizeBusinessCardSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessCardRecognitionResult != nil {
        // handle response
    }
}
```

## ImageOcrPhotoRecognizeFormAdvanced

Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrPhotoRecognizeFormAdvanced(ctx, operations.ImageOcrPhotoRecognizeFormAdvancedRequest{
        RequestBody: operations.ImageOcrPhotoRecognizeFormAdvancedRequestBody{
            ImageFile: operations.ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile{
                Content: []byte("debitis"),
                ImageFile: "ipsa",
            },
        },
        BucketID: sdk.String("delectus"),
        BucketSecretKey: sdk.String("tempora"),
        Diagnostics: sdk.String("suscipit"),
        Preprocessing: sdk.String("molestiae"),
        RecognitionMode: sdk.String("minus"),
    }, operations.ImageOcrPhotoRecognizeFormAdvancedSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormRecognitionResult != nil {
        // handle response
    }
}
```

## ImageOcrPhotoRecognizeReceipt

Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrPhotoRecognizeReceipt(ctx, operations.ImageOcrPhotoRecognizeReceiptRequest{
        RequestBody: operations.ImageOcrPhotoRecognizeReceiptRequestBody{
            ImageFile: operations.ImageOcrPhotoRecognizeReceiptRequestBodyImageFile{
                Content: []byte("placeat"),
                ImageFile: "voluptatum",
            },
        },
        Language: sdk.String("iusto"),
        Preprocessing: sdk.String("excepturi"),
        RecognitionMode: sdk.String("nisi"),
    }, operations.ImageOcrPhotoRecognizeReceiptSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReceiptRecognitionResult != nil {
        // handle response
    }
}
```

## ImageOcrPhotoToText

Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrPhotoToText(ctx, operations.ImageOcrPhotoToTextRequest{
        RequestBody: operations.ImageOcrPhotoToTextRequestBody{
            ImageFile: operations.ImageOcrPhotoToTextRequestBodyImageFile{
                Content: []byte("recusandae"),
                ImageFile: "temporibus",
            },
        },
        Language: sdk.String("ab"),
        RecognitionMode: sdk.String("quis"),
    }, operations.ImageOcrPhotoToTextSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageToTextResponse != nil {
        // handle response
    }
}
```

## ImageOcrPhotoWordsWithLocation

Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrPhotoWordsWithLocation(ctx, operations.ImageOcrPhotoWordsWithLocationRequest{
        RequestBody: operations.ImageOcrPhotoWordsWithLocationRequestBody{
            ImageFile: operations.ImageOcrPhotoWordsWithLocationRequestBodyImageFile{
                Content: []byte("veritatis"),
                ImageFile: "deserunt",
            },
        },
        Diagnostics: sdk.String("perferendis"),
        Language: sdk.String("ipsam"),
        Preprocessing: sdk.String("repellendus"),
        RecognitionMode: sdk.String("sapiente"),
    }, operations.ImageOcrPhotoWordsWithLocationSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhotoToWordsWithLocationResult != nil {
        // handle response
    }
}
```

## ImageOcrPost

Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

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
    res, err := s.ImageOcr.ImageOcrPost(ctx, operations.ImageOcrPostRequest{
        RequestBody: operations.ImageOcrPostRequestBody{
            ImageFile: operations.ImageOcrPostRequestBodyImageFile{
                Content: []byte("quo"),
                ImageFile: "odit",
            },
        },
        Language: sdk.String("at"),
        Preprocessing: sdk.String("at"),
        RecognitionMode: sdk.String("maiores"),
    }, operations.ImageOcrPostSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageToTextResponse != nil {
        // handle response
    }
}
```
