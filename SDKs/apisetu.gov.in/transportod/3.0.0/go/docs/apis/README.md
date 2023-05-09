# APIs

### Available Operations

* [Drvlc](#drvlc) - Driving License
* [Rvcer](#rvcer) - Registration of Vehicles

## Drvlc

API to verify Driving License.

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
    res, err := s.APIs.Drvlc(ctx, operations.DrvlcRequestBody{
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
        Format: operations.DrvlcRequestBodyFormatEnumXML,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.DrvlcSecurity{
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

## Rvcer

API to verify Registration of Vehicles.

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
    res, err := s.APIs.Rvcer(ctx, operations.RvcerRequestBody{
        CertificateParameters: &operations.RvcerRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            UID: "123412341234",
            ChasisNo: "MBLKC12EFBGJ08420",
            RegNo: "DL01AA0101",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "469b6e21-4195-4989-8afa-563e2516fe4c",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "8b711e5b-7fd2-4ed0-a892-1cddc692601f",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "vero",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-01-21T09:30:39.477Z"),
                        To: types.MustTimeFromString("2021-03-05T23:06:52.311Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 7044.15,
                        Unit: "perspiciatis",
                        Value: 318.38,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "porro",
                },
                Timestamp: types.MustTimeFromString("2022-07-02T11:46:10.299Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Amber.Mayert99@yahoo.com",
                    IDNumber: "earum",
                    IDType: "modi",
                    Mobile: "(758) 677-9353 x2221",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "ipsum",
            },
        },
        Format: operations.RvcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.RvcerSecurity{
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
