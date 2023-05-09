# APIs

### Available Operations

* [Ercer](#ercer) - Registration Certificate of Establishment Employing Contract Labour
* [Pfdaw](#pfdaw) - Permission/ Certificate for Well
* [Tpcer](#tpcer) - Permission/ Certificate for Transportation (Petroleum Products, Water etc.)

## Ercer

API to verify Registration Certificate of Establishment Employing Contract Labour.

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
    res, err := s.APIs.Ercer(ctx, operations.ErcerRequestBody{
        CertificateParameters: &operations.ErcerRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            Registration: "1234",
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
        Format: operations.ErcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.ErcerSecurity{
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

## Pfdaw

API to verify Permission/ Certificate for Well.

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
    res, err := s.APIs.Pfdaw(ctx, operations.PfdawRequestBody{
        CertificateParameters: &operations.PfdawRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            Registration: "1234",
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
        Format: operations.PfdawRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.PfdawSecurity{
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

## Tpcer

API to verify Permission/ Certificate for Transportation (Petroleum Products, Water etc.).

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
    res, err := s.APIs.Tpcer(ctx, operations.TpcerRequestBody{
        CertificateParameters: &operations.TpcerRequestBodyCertificateParameters{
            FullName: "Sunil Kumar",
            Registration: "1234",
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
        Format: operations.TpcerRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.TpcerSecurity{
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
