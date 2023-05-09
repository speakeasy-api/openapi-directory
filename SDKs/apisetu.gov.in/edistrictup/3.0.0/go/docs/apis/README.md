# APIs

### Available Operations

* [Btcer](#btcer) - Birth Certificate
* [Ctcer](#ctcer) - Caste Certificate
* [Dmcer](#dmcer) - Domicile Certificate
* [Dpicr](#dpicr) - Disabled Person Identity Card/ Certificate
* [Dtcer](#dtcer) - Death Certificate
* [Incer](#incer) - Income Certificate

## Btcer

API to verify Birth Certificate.

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
    res, err := s.APIs.Btcer(ctx, operations.BtcerRequestBody{
        CertificateParameters: &operations.BtcerRequestBodyCertificateParameters{
            ApplicationNo: "1234",
            CertificateID: "2345",
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
        Format: operations.BtcerRequestBodyFormatEnumXML,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.BtcerSecurity{
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

## Ctcer

API to verify Caste Certificate.

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
    res, err := s.APIs.Ctcer(ctx, operations.CtcerRequestBody{
        CertificateParameters: &operations.CtcerRequestBodyCertificateParameters{
            ApplicationNo: "1234",
            CertificateID: "6789",
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
        Format: operations.CtcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.CtcerSecurity{
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

## Dmcer

API to verify Domicile Certificate.

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
    res, err := s.APIs.Dmcer(ctx, operations.DmcerRequestBody{
        CertificateParameters: &operations.DmcerRequestBodyCertificateParameters{
            ApplicationNo: "1234",
            CertificateID: "2345",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "f9b77f3a-4100-4674-abf6-9280d1ba77a8",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "9ebf737a-e420-43ce-9e6a-95d8a0d446ce",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "2af7a73c-f3be-4453-b870-b326b5a73429",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "maxime",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2020-10-04T22:45:05.165Z"),
                        To: types.MustTimeFromString("2022-04-29T16:20:13.800Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 5173.79,
                        Unit: "incidunt",
                        Value: 1320.68,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "dolores",
                },
                Timestamp: types.MustTimeFromString("2021-08-04T17:36:39.068Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Jalon.Mann20@yahoo.com",
                    IDNumber: "fugit",
                    IDType: "magni",
                    Mobile: "237.907.7709 x207",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quos",
            },
        },
        Format: operations.DmcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.DmcerSecurity{
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

## Dpicr

API to verify Disabled Person Identity Card/ Certificate.

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
    res, err := s.APIs.Dpicr(ctx, operations.DpicrRequestBody{
        CertificateParameters: &operations.DpicrRequestBodyCertificateParameters{
            ApplicationNo: "1213232332",
            CertificateID: "213232232",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "b90f3443-a110-48e0-adcf-4b921879fce9",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "c70a4562-6d43-4681-bf16-d9f5fce6c556",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "inventore",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-08-05T08:34:01.942Z"),
                        To: types.MustTimeFromString("2022-04-21T16:53:11.568Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 9262.13,
                        Unit: "aspernatur",
                        Value: 3253.1,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "eaque",
                },
                Timestamp: types.MustTimeFromString("2020-10-28T11:22:47.751Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Aditya.Lesch14@gmail.com",
                    IDNumber: "accusamus",
                    IDType: "inventore",
                    Mobile: "266-824-4758 x837",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quasi",
            },
        },
        Format: operations.DpicrRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.DpicrSecurity{
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

## Dtcer

API to verify Death Certificate.

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
    res, err := s.APIs.Dtcer(ctx, operations.DtcerRequestBody{
        CertificateParameters: &operations.DtcerRequestBodyCertificateParameters{
            ApplicationNo: "1234",
            CertificateID: "2345",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "44290747-4778-4a7b-9466-d28c10ab3cdc",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "a4251904-e523-4c7e-8bc7-178e4796f2a7",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "0c688282-aa48-4256-af22-2e9817ee17cb",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "vero",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-11-27T21:17:41.726Z"),
                        To: types.MustTimeFromString("2021-09-21T04:40:52.923Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 6900.25,
                        Unit: "molestiae",
                        Value: 6996.22,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "occaecati",
                },
                Timestamp: types.MustTimeFromString("2022-04-14T13:42:03.513Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Alejandrin.Nicolas76@hotmail.com",
                    IDNumber: "consequuntur",
                    IDType: "consequatur",
                    Mobile: "492-555-9854 x09658",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "possimus",
            },
        },
        Format: operations.DtcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.DtcerSecurity{
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

## Incer

API to verify Income Certificate.

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
    res, err := s.APIs.Incer(ctx, operations.IncerRequestBody{
        CertificateParameters: &operations.IncerRequestBodyCertificateParameters{
            ApplicationNo: "Application No",
            CertificateID: "CertificateID",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "2efd121a-a6f1-4e67-8bdb-04f15756082d",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "68ea19f1-d170-4513-b9d0-8086a1840394",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "c26071f9-3f5f-4064-adac-7af515cc413a",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "id",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-10-03T04:29:10.698Z"),
                        To: types.MustTimeFromString("2021-09-01T22:08:53.618Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 9268.8,
                        Unit: "totam",
                        Value: 8539.4,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "vel",
                },
                Timestamp: types.MustTimeFromString("2022-06-12T12:56:04.738Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Edmund_Senger41@yahoo.com",
                    IDNumber: "in",
                    IDType: "corporis",
                    Mobile: "839.507.2439 x82939",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quidem",
            },
        },
        Format: operations.IncerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.IncerSecurity{
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
