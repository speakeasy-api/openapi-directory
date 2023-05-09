# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apisetu.gov.in/dittripura/3.0.0/go
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
    res, err := s.APIs.Chcer(ctx, operations.ChcerRequestBody{
        CertificateParameters: &operations.ChcerRequestBodyCertificateParameters{
            RefNo: "PRTC/2017/84891",
            TokenNo: "B2881A75",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [APIs](docs/apis/README.md)

* [Chcer](docs/apis/README.md#chcer) - Character Certificate
* [Dncer](docs/apis/README.md#dncer) - Distance Certificate
* [Dpcer](docs/apis/README.md#dpcer) - Dependency Certificate
* [Fslcs](docs/apis/README.md#fslcs) - Food Stuff License
* [Grred](docs/apis/README.md#grred) - Grievance Redressal/ Registration
* [Incer](docs/apis/README.md#incer) - Income Certificate
* [Isoal](docs/apis/README.md#isoal) - Issue of Arm Licence
* [Lvcer](docs/apis/README.md#lvcer) - Land Valuation/ Holding/ Record Certificate
* [Malcs](docs/apis/README.md#malcs) - Manufacturer License
* [Mpkby](docs/apis/README.md#mpkby) - Small Savings Agent License
* [Obcer](docs/apis/README.md#obcer) - OBC Certificate
* [Ritin](docs/apis/README.md#ritin) - Right to Information
* [Rmcer](docs/apis/README.md#rmcer) - Marriage Certificate
* [Rscer](docs/apis/README.md#rscer) - Residence Certificate
* [Shcer](docs/apis/README.md#shcer) - SC/ST  Certificate
* [Smcer](docs/apis/README.md#smcer) - Surviving Member Certificate
* [Sslcs](docs/apis/README.md#sslcs) - Standardized Agency Systems (SAS) Agent License
* [Vrwmi](docs/apis/README.md#vrwmi) - License/ Verification of Weights, Measures and Instruments
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
