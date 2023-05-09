# PdfOcr

### Available Operations

* [PdfOcrGetAsyncJobStatus](#pdfocrgetasyncjobstatus) - Returns the result of the Async Job - possible states can be STARTED or COMPLETED
* [PdfOcrPdfToLinesWithLocation](#pdfocrpdftolineswithlocation) - Convert a PDF into text lines with location
* [PdfOcrPdfToWordsWithLocation](#pdfocrpdftowordswithlocation) - Convert a PDF into words with location
* [PdfOcrPost](#pdfocrpost) - Converts an uploaded PDF file into text via Optical Character Recognition.

## PdfOcrGetAsyncJobStatus

Returns the result of the Async Job - possible states can be STARTED or COMPLETED

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
    res, err := s.PdfOcr.PdfOcrGetAsyncJobStatus(ctx, operations.PdfOcrGetAsyncJobStatusRequest{
        AsyncJobID: "molestiae",
    }, operations.PdfOcrGetAsyncJobStatusSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PdfToTextResponse != nil {
        // handle response
    }
}
```

## PdfOcrPdfToLinesWithLocation

Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

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
    res, err := s.PdfOcr.PdfOcrPdfToLinesWithLocation(ctx, operations.PdfOcrPdfToLinesWithLocationRequest{
        RequestBody: operations.PdfOcrPdfToLinesWithLocationRequestBody{
            ImageFile: operations.PdfOcrPdfToLinesWithLocationRequestBodyImageFile{
                Content: []byte("quod"),
                ImageFile: "quod",
            },
        },
        Language: sdk.String("esse"),
        Preprocessing: sdk.String("totam"),
    }, operations.PdfOcrPdfToLinesWithLocationSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PdfToLinesWithLocationResult != nil {
        // handle response
    }
}
```

## PdfOcrPdfToWordsWithLocation

Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

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
    res, err := s.PdfOcr.PdfOcrPdfToWordsWithLocation(ctx, operations.PdfOcrPdfToWordsWithLocationRequest{
        RequestBody: operations.PdfOcrPdfToWordsWithLocationRequestBody{
            ImageFile: operations.PdfOcrPdfToWordsWithLocationRequestBodyImageFile{
                Content: []byte("porro"),
                ImageFile: "dolorum",
            },
        },
        Language: sdk.String("dicta"),
        Preprocessing: sdk.String("nam"),
    }, operations.PdfOcrPdfToWordsWithLocationSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PdfToWordsWithLocationResult != nil {
        // handle response
    }
}
```

## PdfOcrPost

Converts an uploaded PDF file into text via Optical Character Recognition.

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
    res, err := s.PdfOcr.PdfOcrPost(ctx, operations.PdfOcrPostRequest{
        RequestBody: operations.PdfOcrPostRequestBody{
            ImageFile: operations.PdfOcrPostRequestBodyImageFile{
                Content: []byte("officia"),
                ImageFile: "occaecati",
            },
        },
        Language: sdk.String("fugit"),
        Preprocessing: sdk.String("deleniti"),
        RecognitionMode: sdk.String("hic"),
    }, operations.PdfOcrPostSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PdfToTextResponse != nil {
        // handle response
    }
}
```
