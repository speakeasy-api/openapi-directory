# APIs

### Available Operations

* [Socer](#socer) - Educational/ Exam Registration Certificate

## Socer

API to verify Educational/ Exam Registration Certificate.

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
    res, err := s.APIs.Socer(ctx, operations.SocerRequestBody{
        CertificateParameters: &operations.SocerRequestBodyCertificateParameters{
            Appno: "REG1307241",
            DateOfBirth: "11-11-1990",
            Enrolno: "41C172C17OCT1203",
            TypOfCert: "Registration Certificate&#x28;PREGC&#x29;,Duplicate Registration Certificate&#x28;PDURC&#x29;,Good S",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "3f5ad019-da1f-4fe7-8f09-7b0074f15471",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "b5e6e13b-99d4-488e-9e91-e450ad2abd44",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "269802d5-02a9-44bb-8f63-c969e9a3efa7",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "in",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2020-01-25T11:09:22.009Z"),
                        To: types.MustTimeFromString("2022-10-08T04:08:32.252Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 2974.37,
                        Unit: "cumque",
                        Value: 8137.98,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "ea",
                },
                Timestamp: types.MustTimeFromString("2022-04-29T11:09:12.937Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Delphine88@hotmail.com",
                    IDNumber: "delectus",
                    IDType: "quidem",
                    Mobile: "(765) 692-6346 x6404",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "magnam",
            },
        },
        Format: operations.SocerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.SocerSecurity{
        APIKey: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
