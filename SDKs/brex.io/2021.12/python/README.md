# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/brex.io/2021.12/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CompanyAlternativeSearchRequest(
    request_body=operations.CompanyAlternativeSearchRequestBody(
        address="5786 Little Streets",
        name="vel",
        number="error",
        phone="1-542-909-2347 x8545",
        url="nisi",
        vat="recusandae",
    ),
    country="temporibus",
)
    
res = s.v1_company.company_alternative_search(req, operations.CompanyAlternativeSearchSecurity(
    user_key="YOUR_API_KEY_HERE",
))

if res.company_alternative_search_200_application_json_objects is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1_company

* `company_alternative_search` - Retrieves a list of companies from the KYC API company index
* `company_announcement` - Retrieves announcement data
* `company_deepsearch_isin` - Retrieves a list of stock exchange listings
* `company_deepsearch_lei` - Retrieves a list of companies
* `company_deepsearch_name` - Retrieves a list of companies from the official business register
* `company_deepsearch_number` - Retrieves a list of companies from the official business register
* `company_id_announcements` - Retrieves company announcements
* `company_id_dataset` - Retrieves company details
* `company_id_super` - Retrieves structured data extracted from a company document
* `company_monitor_change_types_list` - Get available ChangeTypes
* `company_monitor_id` - Get monitor status for specific company id
* `company_monitor_list` - Retrieves a list of registered monitors
* `company_monitor_register` - Register a Company for monitoring
* `company_monitor_unregister` - Deactivates an active notification
* `company_notification_id` - Retrieves a list of registered notifications
* `company_notification_list` - Retrieves a list of registered notifications
* `company_notification_register` - Creates a new notification
* `company_notification_unregister` - Unregister a company from Monitoring
* `company_search_name` - Retrieves a list of companies from the KYC API company index
* `company_search_number` - Retrieves a list of companies from the KYC API company index

### v1_ein_verification

* `ein_verification_basic` - Verifies an EIN number
* `ein_verification_comprehensive` - Verifies EIN number and retrieves company data
* `ein_verification_lookup` - Retrieves a list of EIN numbers

### v1_iban_verification

* `iban_basic` - Checks validity of an IBAN number
* `iban_comprehensive` - Checks validity of an IBAN number

### v1_nif_verification

* `nif_basic` - Verifies a NIF number
* `nif_comprehensive` - Verifies a NIF number and retrieves company data

### v1_pepsanction

* `pep_monitor_list` - Retrieves a list of monitor entries
* `pep_monitor_unregister` - Deactive a pep sanction monitor
* `pep_monitor_update` - Update details of active Pep Sanction monitor
* `pep_order` - Orders a new Pep Sanction Check Report
* `pep_retrieve` - Returns a json or pdf report

### v1_product

* `product_availability` - Retrieves a document availability result
* `product_catalog` - Returns a catalog of products
* `product_notifier` - Returns metadata for a notifier
* `product_notifier_create` - Creates a notifier for an order
* `product_order` - Places a product order
* `product_order_concierge` - Places a concierge order
* `product_order_ubo` - Places a UBO order
* `product_order_with_option` - Places a product order
* `product_retrieve` - Retrieves the result of an order
* `product_search` - Returns a list of products
* `product_status` - Returns metadata for a order
* `product_update_action` - Updates metadata of an order

### v1_system

* `health_check` - Returns the health information for the official business registers based on usage.
* `system_countries` - Returns a list of countries
* `system_pricelist` - Returns a list of products with prices

### v1_tin_verification

* `tin_verification_basic_check` - Verifies a TIN number
* `tin_verification_comprehensive_check` - EIN Name Lookup with TIN number and retrieves company data
* `tin_verification_name_lookup` - EIN Name Lookup with TIN number

### v1_vat_verification

* `vat_basic` - Returns a verification result
* `vat_comprehensive` - Returns a verification result and company data
* `vat_level_two` - Returns a level two verification result
* `vat_lookup` - Returns a list of vat numbers with additional data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
