# ZXINGZebraCrossingBarCodes

### Available Operations

* [ZebraGET](#zebraget) - Generate bar codes and QR codes with ZXING.

## ZebraGET

See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 

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
    res, err := s.ZXINGZebraCrossingBarCodes.ZebraGET(ctx, operations.ZebraGETRequest{
        Format: "corrupti",
        Height: sdk.Int64(847252),
        Showlabel: sdk.Bool(false),
        Value: "vel",
        Width: sdk.Int64(623564),
    }, operations.ZebraGETSecurity{
        QueryAPIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ZebraGET200ImagePngBinaryString != nil {
        // handle response
    }
}
```
