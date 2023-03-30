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

    req := operations.AgcerRequest{
        Security: operations.AgcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AgcerRequestBody{
            CertificateParameters: &operations.AgcerRequestBodyCertificateParameters{
                Name: "4 Characters of Name",
                RefNo: "XXXX/XX/2017",
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
                            From: "2022-08-22T02:39:55.675Z",
                            To: "2022-05-20T23:16:08.511Z",
                        },
                        Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                            Repeats: 5448.83,
                            Unit: "illum",
                            Value: 4236.55,
                        },
                    },
                    Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                        Description: "error",
                    },
                    Timestamp: "2022-08-06T08:50:24.554Z",
                    User: shared.ConsentArtifactSchemaConsentUser{
                        Email: "Hunter.Gulgowski96@yahoo.com",
                        IDNumber: "tempora",
                        IDType: "suscipit",
                        Mobile: "885.553.9803 x060",
                    },
                },
                Signature: shared.ConsentArtifactSchemaSignature{
                    Signature: "ipsam",
                },
            },
            Format: "pdf",
            TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
        },
    }

    ctx := context.Background()
    res, err := s.APIs.Agcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->