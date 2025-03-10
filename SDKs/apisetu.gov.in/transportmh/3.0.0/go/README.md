# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apisetu.gov.in/transportmh/3.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                    ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "cb739205-9293-496f-aa75-96eb10faaa23",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "corporis",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: types.MustTimeFromString("2022-04-01T23:59:21.675Z"),
                        To: types.MustTimeFromString("2022-05-24T03:24:11.703Z"),
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 3637.11,
                        Unit: "minima",
                        Value: 5701.97,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "accusantium",
                },
                Timestamp: types.MustTimeFromString("2022-05-14T11:45:33.094Z"),
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Veronica.Brakus@hotmail.com",
                    IDNumber: "culpa",
                    IDType: "consequuntur",
                    Mobile: "752.544.2613 x16631",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "quo",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [APIs](docs/apis/README.md)

* [Drvlc](docs/apis/README.md#drvlc) - Driving License
* [Rvcer](docs/apis/README.md#rvcer) - Registration of Vehicles
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
