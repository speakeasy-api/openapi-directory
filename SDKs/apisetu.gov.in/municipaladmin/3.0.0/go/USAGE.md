<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.KecerRequestBody{
        CertificateParameters: &operations.KecerRequestBodyCertificateParameters{
            DocumentNumber: "123113",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "corrupti",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "provident",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "distinctio",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "quibusdam",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: "2021-04-14T16:47:33.722Z",
                        To: "2021-04-22T12:08:58.275Z",
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 4236.55,
                        Unit: "error",
                        Value: 6458.94,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "suscipit",
                },
                Timestamp: "2022-09-14T09:35:47.986Z",
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Anahi38@hotmail.com",
                    IDNumber: "molestiae",
                    IDType: "minus",
                    Mobile: "645-598-0306 x03897",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "odit",
            },
        },
        Format: "pdf",
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }

    ctx := context.Background()
    res, err := s.APIs.Kecer(ctx, req, operations.KecerSecurity{
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