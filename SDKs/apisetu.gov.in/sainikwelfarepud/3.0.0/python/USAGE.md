<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DpcerRequestBody(
    certificate_parameters=operations.DpcerRequestBodyCertificateParameters(
        full_name="Sunil Kumar",
        uid="123412341234",
        cert_no="xxxx123",
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
    
res = s.ap_is.dpcer(req, operations.DpcerSecurity(
    api_key="YOUR_API_KEY_HERE",
    client_id="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->