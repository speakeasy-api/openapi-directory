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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AecmwRequestBody{
        CertificateParameters: &operations.AecmwRequestBodyCertificateParameters{
            Udf1: "I991C0L16978",
        },
        ConsentArtifact: &shared.ConsentArtifactSchema{
            Consent: shared.ConsentArtifactSchemaConsent{
                ConsentID: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                Data: shared.ConsentArtifactSchemaConsentData{
                    ID: "corrupti",
                },
                DataConsumer: shared.ConsentArtifactSchemaConsentDataConsumer{
                    ID: "provident",
                },
                DataProvider: shared.ConsentArtifactSchemaConsentDataProvider{
                    ID: "distinctio",
                },
                Permission: shared.ConsentArtifactSchemaConsentPermission{
                    Access: "quibusdam",
                    DateRange: shared.ConsentArtifactSchemaConsentPermissionDateRange{
                        From: "2021-04-14T16:47:33.722Z",
                        To: "2021-04-22T12:08:58.275Z",
                    },
                    Frequency: shared.ConsentArtifactSchemaConsentPermissionFrequency{
                        Repeats: 4236.55,
                        Unit: "error",
                        Value: 6458.94,
                    },
                },
                Purpose: shared.ConsentArtifactSchemaConsentPurpose{
                    Description: "suscipit",
                },
                Timestamp: "2022-09-14T09:35:47.986Z",
                User: shared.ConsentArtifactSchemaConsentUser{
                    Email: "Anahi38@hotmail.com",
                    IDNumber: "molestiae",
                    IDType: "minus",
                    Mobile: "645-598-0306 x03897",
                },
            },
            Signature: shared.ConsentArtifactSchemaSignature{
                Signature: "odit",
            },
        },
        Format: "pdf",
        TxnID: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
    }

    ctx := context.Background()
    res, err := s.APIs.Aecmw(ctx, req, operations.AecmwSecurity{
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


### APIs

* `Aecmw` - Application for Renewal of Contractor Migrant Workmen license
* `Aemtw` - Application for Renewal of Motor Transport Worker Registration
* `Agcer` - Agriculture/ Agriculturist Certificate
* `Alimw` - Application for License for Inter State Migrant Workmen
* `Arcmw` - Application for Registration of Contractor Migrant Workmen license
* `Armtw` - Application for Registration of Motor Transport Worker Registration
* `Bacer` - Backward Area Certificate
* `Bhcer` - Bonafide Certificate
* `Bpcrd` - BPL Card
* `Btcer` - Birth Certificate
* `Cecer` - Renewal Certificate of Contract Labour License
* `Chcer` - Character Certificate
* `Clcer` - Registration Certificate for Contract Labour License
* `Coprg` - Copy of Pariwar Register
* `Dccer` - Dogra Class Certificate
* `Dmcer` - Domicile Certificate
* `Dpicr` - Disabled Person Identity Card/ Certificate
* `Dtcer` - Death Certificate
* `Ercer` - Registration Certificate of Establishment Employing Contract Labour
* `Ffcer` - Freedom Fighter Certificate
* `Igcer` - Indigent (Needy Person) Certificate
* `Incer` - Income Certificate
* `Lhcer` - Legal Heir Certificate
* `Mncer` - Minority Certificate
* `Mnrga` - MNREGA Job Card
* `Obcer` - OBC Certificate
* `Racer` - Rural Area Certificate
* `Rmcer` - Marriage Certificate
* `Secer` - Renewal Certificate of Shops And Commercial Establishment
* `Shcer` - SC/ST  Certificate
* `Sicrd` - Senior Citizen Identity Card/ Certificate
* `Srcer` - Registration Certificate of Shops And Commercial Establishment
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
