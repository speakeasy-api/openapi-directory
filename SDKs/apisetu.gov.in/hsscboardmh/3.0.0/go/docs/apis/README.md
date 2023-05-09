# APIs

### Available Operations

* [Hpcer](#hpcer) - Class XII Passing Certificate
* [Hscer](#hscer) - Class XII Marksheet
* [Spcer](#spcer) - Class X Passing Certificate
* [Sscer](#sscer) - Class X Marksheet

## Hpcer

API to verify Class XII Passing Certificate.

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
    res, err := s.APIs.Hpcer(ctx, operations.HpcerRequestBody{
        CertificateParameters: &operations.HpcerRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            Exsession: "MAR or OCT",
            Rollnumber: "P183286",
            Totalmarks: "389",
            Year: "2015",
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
        Format: operations.HpcerRequestBodyFormatEnumXML,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.HpcerSecurity{
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

## Hscer

API to verify Class XII Marksheet.

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
    res, err := s.APIs.Hscer(ctx, operations.HscerRequestBody{
        CertificateParameters: &operations.HscerRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            Exsession: "MAR or OCT",
            Rollnumber: "P183286",
            Totalmarks: "389",
            Year: "2015",
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
        Format: operations.HscerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.HscerSecurity{
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

## Spcer

API to verify Class X Passing Certificate.

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
    res, err := s.APIs.Spcer(ctx, operations.SpcerRequestBody{
        CertificateParameters: &operations.SpcerRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            Exsession: "MAR or OCT",
            Rollnumber: "C183286",
            Totalmarks: "517",
            Year: "2015",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "9b77f3a4-1006-474e-bf69-280d1ba77a89",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "af7a73cf-3be4-453f-870b-326b5a73429c",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "pariatur",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-10-07T04:50:29.805Z"),
                        To: types.MustTimeFromString("2021-12-19T07:31:04.219Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 2768.94,
                        Unit: "aspernatur",
                        Value: 1749.09,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "distinctio",
                },
                Timestamp: types.MustTimeFromString("2022-03-17T21:02:01.759Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Kennedy20@yahoo.com",
                    IDNumber: "fugit",
                    IDType: "magni",
                    Mobile: "237.907.7709 x207",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quos",
            },
        },
        Format: operations.SpcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.SpcerSecurity{
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

## Sscer

API to verify Class X Marksheet.

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
    res, err := s.APIs.Sscer(ctx, operations.SscerRequestBody{
        CertificateParameters: &operations.SscerRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            Exsession: "MAR or OCT",
            Rollnumber: "C183286",
            Totalmarks: "517",
            Year: "2015",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "90f3443a-1108-4e0a-9cf4-b921879fce95",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "3f73ef7f-bc7a-4bd7-8dd3-9c0f5d2cff7c",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "70a45626-d436-4813-b16d-9f5fce6c5561",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "magnam",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-03-24T01:04:28.722Z"),
                        To: types.MustTimeFromString("2022-01-27T22:22:28.881Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 1324.87,
                        Unit: "minima",
                        Value: 534.27,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "a",
                },
                Timestamp: types.MustTimeFromString("2022-12-21T19:37:25.645Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Kade14@gmail.com",
                    IDNumber: "accusamus",
                    IDType: "inventore",
                    Mobile: "266-824-4758 x837",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quasi",
            },
        },
        Format: operations.SscerRequestBodyFormatEnumXML,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.SscerSecurity{
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
