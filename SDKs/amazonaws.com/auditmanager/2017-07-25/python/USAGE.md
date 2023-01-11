<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssociateAssessmentReportEvidenceFolderRequest(
    path_params=operations.AssociateAssessmentReportEvidenceFolderPathParams(
        assessment_id="cum",
    ),
    headers=operations.AssociateAssessmentReportEvidenceFolderHeaders(
        x_amz_algorithm="hic",
        x_amz_content_sha256="qui",
        x_amz_credential="cum",
        x_amz_date="facilis",
        x_amz_security_token="consequatur",
        x_amz_signature="molestiae",
        x_amz_signed_headers="laudantium",
    ),
    request=operations.AssociateAssessmentReportEvidenceFolderRequestBody(
        evidence_folder_id="tempore",
    ),
)
    
res = s.associate_assessment_report_evidence_folder(req)

if res.associate_assessment_report_evidence_folder_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->