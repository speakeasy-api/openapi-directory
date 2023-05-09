# APIs

### Available Operations

* [Cmcer](#cmcer) - Community Certificate
* [Cncer](#cncer) - Conversion Certificate
* [Ctcer](#ctcer) - Caste Certificate
* [Dmcer](#dmcer) - Domicile Certificate
* [Dpcer](#dpcer) - Dependency Certificate
* [Dscer](#dscer) - Destitute Certificate
* [Fmcer](#fmcer) - Family Membership Certificate
* [Idcer](#idcer) - Identification Certificate
* [Imcer](#imcer) - Inter-Caste Marriage Certificate
* [Incer](#incer) - Income Certificate
* [Lfcer](#lfcer) - Life Certificate
* [Lhcer](#lhcer) - Legal Heir Certificate
* [Locer](#locer) - Location Certificate
* [Mncer](#mncer) - Minority Certificate
* [Nrcer](#nrcer) - Non-Remarriage Certificate
* [Ntcer](#ntcer) - Nativity Certificate
* [Oscer](#oscer) - One and the Same Certificate
* [Pncer](#pncer) - Possession and Non-Attachment Certificate
* [Pscer](#pscer) - Possession Certificate
* [Rlcer](#rlcer) - Relationship Certificate
* [Rscer](#rscer) - Residence Certificate
* [Slcer](#slcer) - Solvency Certificate
* [Vlcer](#vlcer) - Valuation Certificate
* [Wwcer](#wwcer) - Widow-Widower Certificate

## Cmcer

API to verify Community Certificate.

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
    res, err := s.APIs.Cmcer(ctx, operations.CmcerRequestBody{
        CertificateParameters: &operations.CmcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
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
        Format: operations.CmcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.CmcerSecurity{
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

## Cncer

API to verify Conversion Certificate.

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
    res, err := s.APIs.Cncer(ctx, operations.CncerRequestBody{
        CertificateParameters: &operations.CncerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "ba4469b6-e214-4195-9890-afa563e2516f",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "e4c8b711-e5b7-4fd2-ad02-8921cddc6926",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "01fb576b-0d5f-40d3-8c5f-bb2587053202",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "minus",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-10-11T06:25:10.430Z"),
                        To: types.MustTimeFromString("2021-12-18T20:09:27.741Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 9441.2,
                        Unit: "recusandae",
                        Value: 6082.53,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "facilis",
                },
                Timestamp: types.MustTimeFromString("2022-12-08T18:10:54.422Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Casimer.Kutch@hotmail.com",
                    IDNumber: "occaecati",
                    IDType: "rerum",
                    Mobile: "992.665.8577",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "delectus",
            },
        },
        Format: operations.CncerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.CncerSecurity{
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
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "48633323-f9b7-47f3-a410-0674ebf69280",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "d1ba77a8-9ebf-4737-ae42-03ce5e6a95d8",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "a0d446ce-2af7-4a73-8f3b-e453f870b326",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "libero",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-05-10T02:43:24.423Z"),
                        To: types.MustTimeFromString("2022-10-14T13:38:40.307Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 2776.28,
                        Unit: "qui",
                        Value: 5867.84,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "maxime",
                },
                Timestamp: types.MustTimeFromString("2020-10-04T22:45:05.165Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Marguerite13@gmail.com",
                    IDNumber: "dolores",
                    IDType: "distinctio",
                    Mobile: "545.812.1141 x3790",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "cumque",
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
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "bb1e31b8-b90f-4344-ba11-08e0adcf4b92",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "1879fce9-53f7-43ef-bfbc-7abd74dd39c0",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "f5d2cff7-c70a-4456-a6d4-36813f16d9f5",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "sapiente",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2020-04-13T07:43:17.350Z"),
                        To: types.MustTimeFromString("2022-03-24T11:20:42.976Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 3592.71,
                        Unit: "veniam",
                        Value: 3994.99,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "inventore",
                },
                Timestamp: types.MustTimeFromString("2022-08-05T08:34:01.942Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Darion32@hotmail.com",
                    IDNumber: "eaque",
                    IDType: "a",
                    Mobile: "205.831.8020 x6682",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "eum",
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

## Dpcer

API to verify Dependency Certificate.

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
    res, err := s.APIs.Dpcer(ctx, operations.DpcerRequestBody{
        CertificateParameters: &operations.DpcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "6c8dd6b1-4429-4074-b477-8a7bd466d28c",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "10ab3cdc-a425-4190-8e52-3c7e0bc7178e",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "4796f2a7-0c68-4828-aaa4-82562f222e98",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "et",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-02-02T15:37:41.657Z"),
                        To: types.MustTimeFromString("2022-10-02T03:30:08.260Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 4586.04,
                        Unit: "quod",
                        Value: 7241.68,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "vero",
                },
                Timestamp: types.MustTimeFromString("2022-11-27T21:17:41.726Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Herta_Pollich@hotmail.com",
                    IDNumber: "occaecati",
                    IDType: "minima",
                    Mobile: "806.727.1073 x9245",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "provident",
            },
        },
        Format: operations.DpcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.DpcerSecurity{
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

## Dscer

API to verify Destitute Certificate.

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
    res, err := s.APIs.Dscer(ctx, operations.DscerRequestBody{
        CertificateParameters: &operations.DscerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "f1575608-2d68-4ea1-9f1d-17051339d080",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "86a18403-94c2-4607-9f93-f5f0642dac7a",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "asperiores",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-12-08T03:56:05.618Z"),
                        To: types.MustTimeFromString("2022-03-21T02:51:58.534Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 8018.36,
                        Unit: "labore",
                        Value: 704.47,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "adipisci",
                },
                Timestamp: types.MustTimeFromString("2021-09-04T08:55:11.388Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Delaney_Nader@yahoo.com",
                    IDNumber: "totam",
                    IDType: "fugiat",
                    Mobile: "1-554-487-7443 x983",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "recusandae",
            },
        },
        Format: operations.DscerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.DscerSecurity{
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

## Fmcer

API to verify Family Membership Certificate.

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
    res, err := s.APIs.Fmcer(ctx, operations.FmcerRequestBody{
        CertificateParameters: &operations.FmcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "60b375ed-4f6f-4bee-81f3-3317fe35b60e",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "b1ea4265-55ba-43c2-8744-ed53b88f3a8d",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "8f5c0b2f-2fb7-4b19-8a27-6b26916fe1f0",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "corrupti",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-03-06T01:38:10.905Z"),
                        To: types.MustTimeFromString("2022-05-29T20:03:41.130Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 2587.02,
                        Unit: "necessitatibus",
                        Value: 2155.29,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "ea",
                },
                Timestamp: types.MustTimeFromString("2021-11-23T23:35:18.899Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Donna_Goodwin@hotmail.com",
                    IDNumber: "ex",
                    IDType: "sit",
                    Mobile: "957.423.8507",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "error",
            },
        },
        Format: operations.FmcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.FmcerSecurity{
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

## Idcer

API to verify Identification Certificate.

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
    res, err := s.APIs.Idcer(ctx, operations.IdcerRequestBody{
        CertificateParameters: &operations.IdcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "55efd20e-457e-4185-8b6a-89fbe3a5aa8e",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "4824d0ab-4075-4088-a518-62065e904f3b",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "1194b8ab-f603-4a79-b9df-e0ab7da8a50c",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "repudiandae",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-06-17T00:04:35.396Z"),
                        To: types.MustTimeFromString("2022-01-04T05:35:56.795Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 5199.52,
                        Unit: "suscipit",
                        Value: 6939.57,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "maxime",
                },
                Timestamp: types.MustTimeFromString("2022-07-16T17:34:48.115Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Reyna_Jenkins@gmail.com",
                    IDNumber: "officiis",
                    IDType: "officiis",
                    Mobile: "1-631-595-8653 x95519",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "dolorum",
            },
        },
        Format: operations.IdcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.IdcerSecurity{
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

## Imcer

API to verify Inter-Caste Marriage Certificate.

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
    res, err := s.APIs.Imcer(ctx, operations.ImcerRequestBody{
        CertificateParameters: &operations.ImcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "d4f0e101-2563-4f94-a29e-973e922a57a1",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "5be3e060-807e-42b6-a3ab-8845f0597a60",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "ff2a54a3-1e94-4764-a3e8-65e7956f9251",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "animi",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-05-07T21:46:24.459Z"),
                        To: types.MustTimeFromString("2021-05-11T03:29:26.448Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 6591.77,
                        Unit: "ex",
                        Value: 3972.57,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "accusantium",
                },
                Timestamp: types.MustTimeFromString("2020-01-18T19:52:50.985Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Isaias_Reichert67@yahoo.com",
                    IDNumber: "placeat",
                    IDType: "modi",
                    Mobile: "689.816.2301 x70021",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "eum",
            },
        },
        Format: operations.ImcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.ImcerSecurity{
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
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "48dc2f61-5199-4ebf-90e9-fe6c632ca3ae",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "d0117996-312f-4de0-8771-778ff61d0174",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "76360a15-db6a-4660-a59a-1adeaab5851d",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "ex",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2021-10-14T02:46:55.259Z"),
                        To: types.MustTimeFromString("2022-09-05T19:39:47.586Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 7139.27,
                        Unit: "voluptatem",
                        Value: 5615.77,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "cum",
                },
                Timestamp: types.MustTimeFromString("2022-11-21T22:17:16.353Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Lemuel_Bogan63@yahoo.com",
                    IDNumber: "voluptatem",
                    IDType: "sapiente",
                    Mobile: "1-268-900-5949 x57391",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "ullam",
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

## Lfcer

API to verify Life Certificate.

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
    res, err := s.APIs.Lfcer(ctx, operations.LfcerRequestBody{
        CertificateParameters: &operations.LfcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "0d8cdb5a-3418-4143-8104-21813d5208ec",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "e7e253b6-6845-41c6-86e2-05e16deab3fe",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "c9578a64-5842-473a-8418-d162309fb092",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "occaecati",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-08-29T19:51:14.645Z"),
                        To: types.MustTimeFromString("2022-04-25T11:28:06.253Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 8818.97,
                        Unit: "voluptatibus",
                        Value: 7196.2,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "omnis",
                },
                Timestamp: types.MustTimeFromString("2022-01-06T10:12:04.022Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Providenci_Gutkowski41@yahoo.com",
                    IDNumber: "itaque",
                    IDType: "commodi",
                    Mobile: "927-903-4002 x9358",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "deserunt",
            },
        },
        Format: operations.LfcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.LfcerSecurity{
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

## Lhcer

API to verify Legal Heir Certificate.

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
    res, err := s.APIs.Lhcer(ctx, operations.LhcerRequestBody{
        CertificateParameters: &operations.LhcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "757a59ec-fef6-46ef-9caa-3383c2beb477",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "373c8d72-f64d-41db-9f2c-4310661e9634",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "9e1cf9e0-6e3a-4437-800a-e6b6bc9b8f75",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "unde",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2021-01-14T18:43:36.668Z"),
                        To: types.MustTimeFromString("2021-11-18T12:30:52.334Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 3574.25,
                        Unit: "est",
                        Value: 6216.66,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "esse",
                },
                Timestamp: types.MustTimeFromString("2022-11-30T22:48:52.392Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Daron21@hotmail.com",
                    IDNumber: "ad",
                    IDType: "qui",
                    Mobile: "(537) 756-4101 x4002",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "neque",
            },
        },
        Format: operations.LhcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.LhcerSecurity{
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

## Locer

API to verify Location Certificate.

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
    res, err := s.APIs.Locer(ctx, operations.LocerRequestBody{
        CertificateParameters: &operations.LocerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "5e139dbc-2259-4b1a-bda8-c070e1084cb0",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "672d1ad8-79ee-4b96-a5b8-5efbd02bae0b",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "e2d78225-9e3e-4a4b-9197-f92443da7ce5",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "qui",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2021-12-08T03:38:46.630Z"),
                        To: types.MustTimeFromString("2022-05-07T19:45:21.246Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 8095.94,
                        Unit: "enim",
                        Value: 2040.72,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "in",
                },
                Timestamp: types.MustTimeFromString("2021-09-13T18:43:27.876Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Flo_Gusikowski73@gmail.com",
                    IDNumber: "aperiam",
                    IDType: "libero",
                    Mobile: "455.572.7636",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "impedit",
            },
        },
        Format: operations.LocerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.LocerSecurity{
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

## Mncer

API to verify Minority Certificate.

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
    res, err := s.APIs.Mncer(ctx, operations.MncerRequestBody{
        CertificateParameters: &operations.MncerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "fbe2fd57-0757-4792-9177-deac646ecb57",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "3409e3eb-1e5a-42b1-aeb0-7f116db99545",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "fc95fa88-970e-4189-9bb3-0fcb33ea055b",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "architecto",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-01-18T19:40:42.789Z"),
                        To: types.MustTimeFromString("2020-07-17T01:48:36.789Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 2514.64,
                        Unit: "magnam",
                        Value: 9322.96,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "sed",
                },
                Timestamp: types.MustTimeFromString("2022-01-04T08:34:55.183Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Raquel86@gmail.com",
                    IDNumber: "amet",
                    IDType: "exercitationem",
                    Mobile: "(377) 593-5733",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "nisi",
            },
        },
        Format: operations.MncerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.MncerSecurity{
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

## Nrcer

API to verify Non-Remarriage Certificate.

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
    res, err := s.APIs.Nrcer(ctx, operations.NrcerRequestBody{
        CertificateParameters: &operations.NrcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "bcdb35ff-2e4b-4275-b7a8-cd9e7319c177",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "d525f77b-114e-4eb5-aff7-85fc37814d4c",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "98e0c2bb-89eb-475d-ad63-6c600503d8bb",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "amet",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-11-18T21:12:35.377Z"),
                        To: types.MustTimeFromString("2022-12-02T06:45:21.747Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 9384.12,
                        Unit: "iusto",
                        Value: 2286.46,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "provident",
                },
                Timestamp: types.MustTimeFromString("2021-03-16T11:48:43.064Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Thaddeus.Altenwerth@yahoo.com",
                    IDNumber: "itaque",
                    IDType: "facilis",
                    Mobile: "258-351-0221 x9255",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "beatae",
            },
        },
        Format: operations.NrcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.NrcerSecurity{
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

## Ntcer

API to verify Nativity Certificate.

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
    res, err := s.APIs.Ntcer(ctx, operations.NtcerRequestBody{
        CertificateParameters: &operations.NtcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "d4c700b6-07f3-4c93-873b-9da3f2ceda7e",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "23f22574-11fa-4f4b-b544-e472e802857a",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "5b40463a-7d57-45f1-800e-764ad7334ec1",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "distinctio",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-06-11T07:28:15.655Z"),
                        To: types.MustTimeFromString("2022-04-18T16:39:17.670Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 2292.76,
                        Unit: "autem",
                        Value: 6854.15,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "alias",
                },
                Timestamp: types.MustTimeFromString("2022-12-23T17:03:28.575Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Johnpaul6@yahoo.com",
                    IDNumber: "eaque",
                    IDType: "saepe",
                    Mobile: "786.300.9902 x11861",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "beatae",
            },
        },
        Format: operations.NtcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.NtcerSecurity{
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

## Oscer

API to verify One and the Same Certificate.

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
    res, err := s.APIs.Oscer(ctx, operations.OscerRequestBody{
        CertificateParameters: &operations.OscerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "64cf9ab8-366c-4723-bfda-9e06bee4825c",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "1fc0e115-c80b-4ff9-9854-4ec42defcce8",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "f1977773-e635-462a-bb40-8f05e3d48fda",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "delectus",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-11-21T15:49:27.953Z"),
                        To: types.MustTimeFromString("2022-05-15T17:54:47.658Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 748.95,
                        Unit: "repellat",
                        Value: 3632.14,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "doloribus",
                },
                Timestamp: types.MustTimeFromString("2021-03-11T08:40:17.658Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Brannon_Hills@gmail.com",
                    IDNumber: "alias",
                    IDType: "quidem",
                    Mobile: "591.486.5229",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "adipisci",
            },
        },
        Format: operations.OscerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.OscerSecurity{
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

## Pncer

API to verify Possession and Non-Attachment Certificate.

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
    res, err := s.APIs.Pncer(ctx, operations.PncerRequestBody{
        CertificateParameters: &operations.PncerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "b756c11f-6c37-4a51-a624-3835bbc05a23",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "a45cefc5-fde1-40a0-8e21-69e510019c6d",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "c5e34762-799b-4fbb-a694-9fb2bb4ecae6",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "quo",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-02-24T23:24:18.771Z"),
                        To: types.MustTimeFromString("2022-02-25T05:11:57.735Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 7068.72,
                        Unit: "non",
                        Value: 6495.34,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "assumenda",
                },
                Timestamp: types.MustTimeFromString("2020-11-04T17:10:36.315Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Enola_Schumm67@hotmail.com",
                    IDNumber: "incidunt",
                    IDType: "maxime",
                    Mobile: "(236) 666-5270 x133",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quaerat",
            },
        },
        Format: operations.PncerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.PncerSecurity{
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

## Pscer

API to verify Possession Certificate.

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
    res, err := s.APIs.Pscer(ctx, operations.PscerRequestBody{
        CertificateParameters: &operations.PscerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "cf5e9d9a-4578-4adc-9ac6-00dec001ac80",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "2e2ec09f-f8f0-4f81-aff3-477c13e902c1",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "4125b096-0a66-4815-9a47-2af923c5949f",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "laudantium",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-01-11T07:21:19.606Z"),
                        To: types.MustTimeFromString("2022-08-21T04:43:10.345Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 574.7,
                        Unit: "quisquam",
                        Value: 9484.44,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "quas",
                },
                Timestamp: types.MustTimeFromString("2022-08-09T14:14:56.146Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Vergie.Rohan@hotmail.com",
                    IDNumber: "dicta",
                    IDType: "minus",
                    Mobile: "1-977-729-1217 x945",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "sint",
            },
        },
        Format: operations.PscerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.PscerSecurity{
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

## Rlcer

API to verify Relationship Certificate.

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
    res, err := s.APIs.Rlcer(ctx, operations.RlcerRequestBody{
        CertificateParameters: &operations.RlcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "ffafeda5-3e5a-4e6e-8ac1-84c2b9c247c8",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "8373a40e-1942-4f32-a550-55756f5d56d0",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "bd0af2df-e13d-4b4f-a2cb-a3f8941aebc0",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "expedita",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-11-22T18:35:16.911Z"),
                        To: types.MustTimeFromString("2022-03-17T18:10:38.581Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 5704.23,
                        Unit: "magni",
                        Value: 2736.77,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "possimus",
                },
                Timestamp: types.MustTimeFromString("2022-04-20T07:22:08.860Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Sharon_Rowe77@gmail.com",
                    IDNumber: "quos",
                    IDType: "asperiores",
                    Mobile: "630-209-3882 x8496",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quae",
            },
        },
        Format: operations.RlcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.RlcerSecurity{
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

## Rscer

API to verify Residence Certificate.

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
    res, err := s.APIs.Rscer(ctx, operations.RscerRequestBody{
        CertificateParameters: &operations.RscerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "804e54c8-2f16-48a3-a3c8-873e484380b1",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "f6b8ca27-5a60-4a04-8495-cc699171b51c",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "1bdb1cf4-b888-4ebd-bc4c-cca99bc7fc0b",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "fugit",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2020-09-24T20:46:17.902Z"),
                        To: types.MustTimeFromString("2022-10-01T05:57:46.161Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 136.37,
                        Unit: "laudantium",
                        Value: 4804.21,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "dolor",
                },
                Timestamp: types.MustTimeFromString("2022-03-06T15:30:31.005Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Maye43@gmail.com",
                    IDNumber: "at",
                    IDType: "eum",
                    Mobile: "654.666.5351 x635",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "magni",
            },
        },
        Format: operations.RscerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.RscerSecurity{
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

## Slcer

API to verify Solvency Certificate.

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
    res, err := s.APIs.Slcer(ctx, operations.SlcerRequestBody{
        CertificateParameters: &operations.SlcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "08c54fef-a9c9-45f2-aac5-565d307cfee8",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "1206e281-3fa4-4a41-8480-d3f2132af031",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "02d514f4-cc6f-418b-b962-1a6a4f77a87e",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "earum",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-02-12T01:27:36.466Z"),
                        To: types.MustTimeFromString("2022-04-19T18:40:34.391Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 9301.11,
                        Unit: "dignissimos",
                        Value: 3734.49,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "explicabo",
                },
                Timestamp: types.MustTimeFromString("2021-10-23T06:28:50.254Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Mckenzie30@yahoo.com",
                    IDNumber: "architecto",
                    IDType: "praesentium",
                    Mobile: "1-377-607-5854 x38095",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "tempora",
            },
        },
        Format: operations.SlcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.SlcerSecurity{
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

## Vlcer

API to verify Valuation Certificate.

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
    res, err := s.APIs.Vlcer(ctx, operations.VlcerRequestBody{
        CertificateParameters: &operations.VlcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "19d8f84f-144f-43e0-bedc-c4aa5f3cabd9",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "05a972e0-5672-4822-bb2d-309470bf7a4f",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "a87cf535-a6fa-4e54-abf6-0c321f023b75",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "temporibus",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-10-12T00:49:16.585Z"),
                        To: types.MustTimeFromString("2022-07-04T17:02:22.015Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 9713.6,
                        Unit: "itaque",
                        Value: 1147.67,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "est",
                },
                Timestamp: types.MustTimeFromString("2022-03-15T16:49:39.900Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Kathryne.Schuppe58@hotmail.com",
                    IDNumber: "sapiente",
                    IDType: "aperiam",
                    Mobile: "1-354-860-7142 x7471",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "enim",
            },
        },
        Format: operations.VlcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.VlcerSecurity{
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

## Wwcer

API to verify Widow-Widower Certificate.

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
    res, err := s.APIs.Wwcer(ctx, operations.WwcerRequestBody{
        CertificateParameters: &operations.WwcerRequestBodyCertificateParameters{
            Aplno: "564323",
            Certno: "342567",
            Sccd: "QASE5",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "dfbace18-8b1c-44ee-ac8c-6ce611feeb1c",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "7cbdb6ee-c743-478b-a253-17747dc915ad",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "2caf5dd6-723d-4c0f-9ae2-f3a6b7008787",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "quis",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-12-06T23:05:29.295Z"),
                        To: types.MustTimeFromString("2022-10-09T10:46:09.191Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 9569.42,
                        Unit: "corporis",
                        Value: 6660.05,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "iure",
                },
                Timestamp: types.MustTimeFromString("2021-03-24T22:26:43.754Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Misael37@yahoo.com",
                    IDNumber: "minima",
                    IDType: "tempora",
                    Mobile: "608-407-7677",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "nisi",
            },
        },
        Format: operations.WwcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.WwcerSecurity{
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
