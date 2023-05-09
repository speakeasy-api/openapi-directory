# APIs

### Available Operations

* [Adcrd](#adcrd) - Admit Card

## Adcrd

API to verify Admit Card.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIs.Adcrd(ctx, operations.AdcrdRequestBody{
        CertificateParameters: &operations.AdcrdRequestBodyCertificateParameters{
            Dob: "31-12-1980",
            PrnNo: "MA90120190002",
            RequestID: "1234",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "f5ad019d-a1ff-4e78-b097-b0074f15471b",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "5e6e13b9-9d48-48e1-a91e-450ad2abd442",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "69802d50-2a94-4bb4-b63c-969e9a3efa77",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "illum",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2020-11-26T01:41:04.216Z"),
                        To: types.MustTimeFromString("2022-09-14T10:27:07.590Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 7670.24,
                        Unit: "facere",
                        Value: 4118.2,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "aliquid",
                },
                Timestamp: types.MustTimeFromString("2021-03-28T19:04:18.797Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Kristian_Haley69@gmail.com",
                    IDNumber: "provident",
                    IDType: "nam",
                    Mobile: "1-659-363-4664 x0437",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "id",
            },
        },
        Format: operations.AdcrdRequestBodyFormatEnumXML,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.AdcrdSecurity{
        APIKey: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
