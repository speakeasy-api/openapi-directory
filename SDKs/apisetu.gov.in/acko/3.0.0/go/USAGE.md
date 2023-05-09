<!-- Start SDK Example Usage -->
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
    res, err := s.APIs.Cripc(ctx, operations.CripcRequestBody{
        CertificateParameters: &operations.CripcRequestBodyCertificateParameters{
            Phoneno: "10 Digits without any prefix",
            Policyno: "DXXXXXXXXXXXXX/XX OR AROGXXXXXXXXXX",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "cb739205-9293-496f-aa75-96eb10faaa23",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "corporis",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-04-01T23:59:21.675Z"),
                        To: types.MustTimeFromString("2022-05-24T03:24:11.703Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 3637.11,
                        Unit: "minima",
                        Value: 5701.97,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "accusantium",
                },
                Timestamp: types.MustTimeFromString("2022-05-14T11:45:33.094Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Veronica.Brakus@hotmail.com",
                    IDNumber: "culpa",
                    IDType: "consequuntur",
                    Mobile: "752.544.2613 x16631",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quo",
            },
        },
        Format: operations.CripcRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.CripcSecurity{
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
<!-- End SDK Example Usage -->