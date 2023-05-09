# APIs

### Available Operations

* [Agcer](#agcer) - Agriculture/ Agriculturist Certificate
* [Bacer](#bacer) - Backward Area Certificate
* [Bhcer](#bhcer) - Bonafide Certificate
* [Chcer](#chcer) - Character Certificate
* [Dccer](#dccer) - Dogra Class Certificate
* [Ffcer](#ffcer) - Freedom Fighter Certificate
* [Incer](#incer) - Income Certificate
* [Lhcer](#lhcer) - Legal Heir Certificate
* [Mncer](#mncer) - Minority Certificate
* [Obcer](#obcer) - OBC Certificate
* [Psprt](#psprt) - Passport/ Passport Verification
* [Racer](#racer) - Rural Area Certificate
* [Rmcer](#rmcer) - Marriage Certificate
* [Shcer](#shcer) - SC/ST  Certificate

## Agcer

API to verify Agriculture/ Agriculturist Certificate.

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
    res, err := s.APIs.Agcer(ctx, operations.AgcerRequestBody{
        CertificateParameters: &operations.AgcerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.AgcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.AgcerSecurity{
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

## Bacer

API to verify Backward Area Certificate.

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
    res, err := s.APIs.Bacer(ctx, operations.BacerRequestBody{
        CertificateParameters: &operations.BacerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.BacerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.BacerSecurity{
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

## Bhcer

API to verify Bonafide Certificate.

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
    res, err := s.APIs.Bhcer(ctx, operations.BhcerRequestBody{
        CertificateParameters: &operations.BhcerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.BhcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.BhcerSecurity{
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

## Chcer

API to verify Character Certificate.

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
    res, err := s.APIs.Chcer(ctx, operations.ChcerRequestBody{
        CertificateParameters: &operations.ChcerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.ChcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.ChcerSecurity{
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

## Dccer

API to verify Dogra Class Certificate.

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
    res, err := s.APIs.Dccer(ctx, operations.DccerRequestBody{
        CertificateParameters: &operations.DccerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.DccerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.DccerSecurity{
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

## Ffcer

API to verify Freedom Fighter Certificate.

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
    res, err := s.APIs.Ffcer(ctx, operations.FfcerRequestBody{
        CertificateParameters: &operations.FfcerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.FfcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.FfcerSecurity{
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
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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

## Obcer

API to verify OBC Certificate.

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
    res, err := s.APIs.Obcer(ctx, operations.ObcerRequestBody{
        CertificateParameters: &operations.ObcerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.ObcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.ObcerSecurity{
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

## Psprt

API to verify Passport/ Passport Verification.

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
    res, err := s.APIs.Psprt(ctx, operations.PsprtRequestBody{
        CertificateParameters: &operations.PsprtRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.PsprtRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.PsprtSecurity{
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

## Racer

API to verify Rural Area Certificate.

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
    res, err := s.APIs.Racer(ctx, operations.RacerRequestBody{
        CertificateParameters: &operations.RacerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.RacerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.RacerSecurity{
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

## Rmcer

API to verify Marriage Certificate.

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
    res, err := s.APIs.Rmcer(ctx, operations.RmcerRequestBody{
        CertificateParameters: &operations.RmcerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.RmcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.RmcerSecurity{
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

## Shcer

API to verify SC/ST  Certificate.

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
    res, err := s.APIs.Shcer(ctx, operations.ShcerRequestBody{
        CertificateParameters: &operations.ShcerRequestBodyCertificateParameters{
            Name: "4 Characters of Name",
            RefNo: "XXXX/XX/2017",
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
        Format: operations.ShcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.ShcerSecurity{
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
