# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apisetu.gov.in/transportmz/3.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DrvlcRequestBody(
    certificate_parameters=operations.DrvlcRequestBodyCertificateParameters(
        dob="31-12-1980",
        full_name="Sunil Kumar",
        uid="123412341234",
        dlno="Ex. JH02/2009/236543",
    ),
    consent_artifact=shared.ConsentArtifactSchema(
        consent=shared.ConsentArtifactSchemaConsent(
            consent_id="ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
            data=shared.ConsentArtifactSchemaConsentData(
                id="corrupti",
            ),
            data_consumer=shared.ConsentArtifactSchemaConsentDataConsumer(
                id="provident",
            ),
            data_provider=shared.ConsentArtifactSchemaConsentDataProvider(
                id="distinctio",
            ),
            permission=shared.ConsentArtifactSchemaConsentPermission(
                access="quibusdam",
                date_range=shared.ConsentArtifactSchemaConsentPermissionDateRange(
                    from_="2021-04-14T16:47:33.722Z",
                    to="2021-04-22T12:08:58.275Z",
                ),
                frequency=shared.ConsentArtifactSchemaConsentPermissionFrequency(
                    repeats=4236.55,
                    unit="error",
                    value=6458.94,
                ),
            ),
            purpose=shared.ConsentArtifactSchemaConsentPurpose(
                description="suscipit",
            ),
            timestamp="2022-09-14T09:35:47.986Z",
            user=shared.ConsentArtifactSchemaConsentUser(
                email="Anahi38@hotmail.com",
                id_number="molestiae",
                id_type="minus",
                mobile="645-598-0306 x03897",
            ),
        ),
        signature=shared.ConsentArtifactSchemaSignature(
            signature="odit",
        ),
    ),
    format="pdf",
    txn_id="f7f1469c-29b0-4325-9dfc-c567200a70f7",
)
    
res = s.ap_is.drvlc(req, operations.DrvlcSecurity(
    api_key="YOUR_API_KEY_HERE",
    client_id="YOUR_API_KEY_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ap_is

* `drvlc` - Driving License
* `rvcer` - Registration of Vehicles
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
