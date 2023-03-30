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

    req := operations.DrvlcRequest{
        Security: operations.DrvlcSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DrvlcRequestBody{
            CertificateParameters: &operations.DrvlcRequestBodyCertificateParameters{
                Dob: "31-12-1980",
                FullName: "Sunil Kumar",
                UID: "123412341234",
                Dlno: "TN0119920009646. As per your Driving License.",
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
                            From: "2022-08-22T02:40:58.925Z",
                            To: "2022-05-20T23:17:11.761Z",
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
                    Timestamp: "2022-08-06T08:51:27.804Z",
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
    res, err := s.APIs.Drvlc(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->