# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apisetu.gov.in/edistricthp/3.0.0/go
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
    res, err := s.APIs.Aecmw(ctx, operations.AecmwRequestBody{
        CertificateParameters: &operations.AecmwRequestBodyCertificateParameters{
            Udf1: "I991C0L16978",
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
        Format: operations.AecmwRequestBodyFormatEnumPdf,
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }, operations.AecmwSecurity{
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

* [Aecmw](docs/apis/README.md#aecmw) - Application for Renewal of Contractor Migrant Workmen license
* [Aemtw](docs/apis/README.md#aemtw) - Application for Renewal of Motor Transport Worker Registration
* [Agcer](docs/apis/README.md#agcer) - Agriculture/ Agriculturist Certificate
* [Alimw](docs/apis/README.md#alimw) - Application for License for Inter State Migrant Workmen
* [Arcmw](docs/apis/README.md#arcmw) - Application for Registration of Contractor Migrant Workmen license
* [Armtw](docs/apis/README.md#armtw) - Application for Registration of Motor Transport Worker Registration
* [Bacer](docs/apis/README.md#bacer) - Backward Area Certificate
* [Bhcer](docs/apis/README.md#bhcer) - Bonafide Certificate
* [Bpcrd](docs/apis/README.md#bpcrd) - BPL Card
* [Btcer](docs/apis/README.md#btcer) - Birth Certificate
* [Cecer](docs/apis/README.md#cecer) - Renewal Certificate of Contract Labour License
* [Chcer](docs/apis/README.md#chcer) - Character Certificate
* [Clcer](docs/apis/README.md#clcer) - Registration Certificate for Contract Labour License
* [Coprg](docs/apis/README.md#coprg) - Copy of Pariwar Register
* [Dccer](docs/apis/README.md#dccer) - Dogra Class Certificate
* [Dmcer](docs/apis/README.md#dmcer) - Domicile Certificate
* [Dpicr](docs/apis/README.md#dpicr) - Disabled Person Identity Card/ Certificate
* [Dtcer](docs/apis/README.md#dtcer) - Death Certificate
* [Ercer](docs/apis/README.md#ercer) - Registration Certificate of Establishment Employing Contract Labour
* [Ffcer](docs/apis/README.md#ffcer) - Freedom Fighter Certificate
* [Igcer](docs/apis/README.md#igcer) - Indigent (Needy Person) Certificate
* [Incer](docs/apis/README.md#incer) - Income Certificate
* [Lhcer](docs/apis/README.md#lhcer) - Legal Heir Certificate
* [Mncer](docs/apis/README.md#mncer) - Minority Certificate
* [Mnrga](docs/apis/README.md#mnrga) - MNREGA Job Card
* [Obcer](docs/apis/README.md#obcer) - OBC Certificate
* [Racer](docs/apis/README.md#racer) - Rural Area Certificate
* [Rmcer](docs/apis/README.md#rmcer) - Marriage Certificate
* [Secer](docs/apis/README.md#secer) - Renewal Certificate of Shops And Commercial Establishment
* [Shcer](docs/apis/README.md#shcer) - SC/ST  Certificate
* [Sicrd](docs/apis/README.md#sicrd) - Senior Citizen Identity Card/ Certificate
* [Srcer](docs/apis/README.md#srcer) - Registration Certificate of Shops And Commercial Establishment
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
