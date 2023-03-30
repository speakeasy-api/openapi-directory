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

    req := operations.SkcerRequest{
        Security: operations.SkcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.SkcerRequestBody{
            CertificateParameters: &operations.SkcerRequestBodyCertificateParameters{
                Dob: "31-12-1980",
                FullName: "Sunil Kumar",
                RollNumber: "7894567860",
                Session: "Aug 2013,Aug 2014,Aug 2015,Aug 2016,Aug 2017",
            },
            ConsentArtifact: &shared.ConsentArtifactSchema{
                Consent: shared.ConsentArtifactSchemaConsent{
                    ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                    Data: shared.ConsentArtifactSchemaConsentData{
                        ID: "unde",
                    },
                    DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                        ID: "deserunt",
                    },
                    DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                        ID: "porro",
                    },
                    Permission: shared.ConsentArtifactSchemaConsentPermission{
                        Access: "nulla",
                        DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                            From: "2022-08-21T23:54:36.126Z",
                            To: "2022-05-20T20:30:48.963Z",
                        },
                        Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                            Repeats: 5448.83,
                            Unit: "nulla",
                            Value: 4236.55,
                        },
                    },
                    Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                        Description: "fuga",
                    },
                    Timestamp: "2022-08-06T06:05:05.005Z",
                    User: shared.ConsentArtifactSchemaConsentUser{
                        Email: "Humberto.Gulgowski96@yahoo.com",
                        IDNumber: "enim",
                        IDType: "eum",
                        Mobile: "(885) 553-9803 x060",
                    },
                },
                Signature: shared.ConsentArtifactSchemaSignature{
                    Signature: "consequatur",
                },
            },
            Format: "pdf",
            TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
        },
    }

    ctx := context.Background()
    res, err := s.APIs.Skcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->