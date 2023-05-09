# APIs

### Available Operations

* [Alimw](#alimw) - Application for License for Inter State Migrant Workmen
* [Alsbl](#alsbl) - Application/ License for Boilers
* [Alsfc](#alsfc) - Application/ License for Factory
* [Apptu](#apptu) - Application realted to Trade Unions
* [Clcer](#clcer) - Registration Certificate for Contract Labour License
* [Noocl](#noocl) - Notice of Closure
* [Srcer](#srcer) - Registration Certificate of Shops And Commercial Establishment

## Alimw

API to verify Application for License for Inter State Migrant Workmen.

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
    res, err := s.APIs.Alimw(ctx, operations.AlimwRequestBody{
        CertificateParameters: &operations.AlimwRequestBodyCertificateParameters{
            RefNo: "BRRC/2018/236543",
            TokenNo: "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars",
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
        Format: operations.AlimwRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.AlimwSecurity{
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

## Alsbl

API to verify Application/ License for Boilers.

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
    res, err := s.APIs.Alsbl(ctx, operations.AlsblRequestBody{
        CertificateParameters: &operations.AlsblRequestBodyCertificateParameters{
            RefNo: "BRRC/2018/236543",
            TokenNo: "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars",
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
        Format: operations.AlsblRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.AlsblSecurity{
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

## Alsfc

API to verify Application/ License for Factory.

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
    res, err := s.APIs.Alsfc(ctx, operations.AlsfcRequestBody{
        CertificateParameters: &operations.AlsfcRequestBodyCertificateParameters{
            RefNo: "BRRC/2018/236543",
            TokenNo: "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars",
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
        Format: operations.AlsfcRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.AlsfcSecurity{
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

## Apptu

API to verify Application realted to Trade Unions.

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
    res, err := s.APIs.Apptu(ctx, operations.ApptuRequestBody{
        CertificateParameters: &operations.ApptuRequestBodyCertificateParameters{
            RefNo: "BRRC/2018/236543",
            TokenNo: "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars",
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
        Format: operations.ApptuRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.ApptuSecurity{
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

## Clcer

API to verify Registration Certificate for Contract Labour License.

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
    res, err := s.APIs.Clcer(ctx, operations.ClcerRequestBody{
        CertificateParameters: &operations.ClcerRequestBodyCertificateParameters{
            RefNo: "BRRC/2018/236543",
            TokenNo: "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars",
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
        Format: operations.ClcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.ClcerSecurity{
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

## Noocl

API to verify Notice of Closure.

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
    res, err := s.APIs.Noocl(ctx, operations.NooclRequestBody{
        CertificateParameters: &operations.NooclRequestBodyCertificateParameters{
            RefNo: "BRRC/2018/236543",
            TokenNo: "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars",
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
        Format: operations.NooclRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.NooclSecurity{
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

## Srcer

API to verify Registration Certificate of Shops And Commercial Establishment.

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
    res, err := s.APIs.Srcer(ctx, operations.SrcerRequestBody{
        CertificateParameters: &operations.SrcerRequestBodyCertificateParameters{
            RefNo: "BRRC/2018/236543",
            TokenNo: "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars",
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
        Format: operations.SrcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.SrcerSecurity{
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
