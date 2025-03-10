# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/LegalEntityService/2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteBusinessLinesIDRequest(
    id="corrupti",
)
    
res = s.business_lines.delete_business_lines_id(req, operations.DeleteBusinessLinesIDSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### business_lines

* `delete_business_lines_id` - Delete a business line
* `get_business_lines_id` - Get a business line
* `patch_business_lines_id` - Update a business line
* `post_business_lines` - Create a business line

### documents

* `delete_documents_id` - Delete a document
* `get_documents_id` - Get a document
* `patch_documents_id` - Update a document
* `post_documents` - Upload a document for verification checks

### hosted_onboarding

* `get_themes` - Get a list of hosted onboarding page themes
* `get_themes_id` - Get an onboarding link theme
* `post_legal_entities_id_onboarding_links` - Get a link to an Adyen-hosted onboarding page

### legal_entities

* `get_legal_entities_id` - Get a legal entity
* `get_legal_entities_id_business_lines` - Get all business lines under a legal entity
* `patch_legal_entities_id` - Update a legal entity
* `post_legal_entities` - Create a legal entity

### terms_of_service

* `get_legal_entities_id_terms_of_service_acceptance_infos` - Get Terms of Service information for a legal entity
* `get_legal_entities_id_terms_of_service_status` - Get Terms of Service status
* `patch_legal_entities_id_terms_of_service_termsofservicedocumentid` - Accept Terms of Service
* `post_legal_entities_id_terms_of_service` - Get Terms of Service document

### transfer_instruments

* `delete_transfer_instruments_id` - Delete a transfer instrument
* `get_transfer_instruments_id` - Get a transfer instrument
* `patch_transfer_instruments_id` - Update a transfer instrument
* `post_transfer_instruments` - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
