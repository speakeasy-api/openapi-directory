# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ato.gov.au/0.0.6/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetClassificationsAddressTypesRequest(
    api_key="corrupti",
)
    
res = s.address_types.get_classifications_address_types(req)

if res.address_types is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### address_types

* `get_classifications_address_types` - Retrieve a list of address types

### business_name_lifecycle_states

* `get_classifications_business_name_lifecycle_states` - Retrieve a list of business name lifecycle states

### business_names

* `get_business_names` - Retrieve a list of business names

### electronic_address_types

* `get_classifications_electronic_address_types` - Retrieve a list of electronic address types

### genders

* `get_classifications_genders` - Retrieve a list of genders

### individuals

* `delete_individuals_party_id_` - Delete an individual
* `get_individuals` - Retrieve a list of individuals
* `get_individuals_party_id_` - Retrieve an individual
* `post_individuals` - Create an individual
* `put_individuals_party_id_` - Update an individual

### individuals_addresses

* `delete_individuals_party_id_addresses_address_id_` - Delete an address
* `get_individuals_party_id_addresses` - Retrieve a list of addresses
* `get_individuals_party_id_addresses_address_id_` - Retrieve an address
* `post_individuals_party_id_addresses` - Create an address
* `put_individuals_party_id_addresses_address_id_` - Update an address

### individuals_business_names

* `delete_individuals_party_id_business_names_product_id_` - Delete a business name
* `get_individuals_party_id_business_names` - Retrieve a list of business names
* `get_individuals_party_id_business_names_product_id_` - Retrieve a business name
* `post_individuals_party_id_business_names` - Create a business name
* `put_individuals_party_id_business_names_product_id_` - Update a business name

### individuals_electronic_addresses

* `delete_individuals_party_id_electronic_addresses_address_id_` - Delete an electronic address
* `get_individuals_party_id_electronic_addresses` - Retrieve a list of electronic addresses
* `get_individuals_party_id_electronic_addresses_address_id_` - Retrieve an electronic address
* `post_individuals_party_id_electronic_addresses` - Create an electronic address
* `put_individuals_party_id_electronic_addresses_address_id_` - Update an electronic address

### individuals_licenses

* `delete_individuals_party_id_licenses_product_id_` - Delete a license
* `get_individuals_party_id_licenses` - Retrieve a list of licenses
* `get_individuals_party_id_licenses_product_id_` - Retrieve a license
* `post_individuals_party_id_licenses` - Create a license
* `put_individuals_party_id_licenses_product_id_` - Update a license

### individuals_roles

* `delete_individuals_party_id_roles_role_id_` - Delete a role
* `get_individuals_party_id_roles` - Retrieve a list of roles
* `get_individuals_party_id_roles_role_id_` - Retrieve a role
* `post_individuals_party_id_roles` - Create a role
* `put_individuals_party_id_roles_role_id_` - Update a role

### legal_entity_types

* `get_classifications_legal_entity_types` - Retrieve a list of legal entity types

### license_lifecycle_states

* `get_classifications_license_lifecycle_states` - Retrieve a list of license lifecycle states

### license_types

* `get_classifications_license_types` - Retrieve a list of license types

### licenses

* `get_licenses` - Retrieve a list of licenses

### name_directions

* `get_classifications_name_directions` - Retrieve a list of name directions

### name_prefixes

* `get_classifications_name_prefixes` - Retrieve a list of name prefixes

### name_types

* `get_classifications_name_types` - Retrieve a list of name types

### organisations

* `delete_organisations_party_id_` - Delete an organisation
* `get_organisations` - Retrieve a list of organisations
* `get_organisations_party_id_` - Retrieve an organisation
* `post_organisations` - Create an organisation
* `put_organisations_party_id_` - Update an organisation

### organisations_addresses

* `delete_organisations_party_id_addresses_address_id_` - Delete an address
* `get_organisations_party_id_addresses` - Retrieve a list of addresses
* `get_organisations_party_id_addresses_address_id_` - Retrieve an address
* `post_organisations_party_id_addresses` - Create an address
* `put_organisations_party_id_addresses_address_id_` - Update an address

### organisations_business_names

* `delete_organisations_party_id_business_names_product_id_` - Delete a business name
* `get_organisations_party_id_business_names` - Retrieve a list of business names
* `get_organisations_party_id_business_names_product_id_` - Retrieve a business name
* `post_organisations_party_id_business_names` - Create a business name
* `put_organisations_party_id_business_names_product_id_` - Update a business name

### organisations_electronic_addresses

* `delete_organisations_party_id_electronic_addresses_address_id_` - Delete an electronic address
* `get_organisations_party_id_electronic_addresses` - Retrieve a list of electronic addresses
* `get_organisations_party_id_electronic_addresses_address_id_` - Retrieve an electronic address
* `post_organisations_party_id_electronic_addresses` - Create an electronic address
* `put_organisations_party_id_electronic_addresses_address_id_` - Update an electronic address

### organisations_licenses

* `delete_organisations_party_id_licenses_product_id_` - Delete a license
* `get_organisations_party_id_licenses` - Retrieve a list of licenses
* `get_organisations_party_id_licenses_product_id_` - Retrieve a license
* `post_organisations_party_id_licenses` - Create a license
* `put_organisations_party_id_licenses_product_id_` - Update a license

### organisations_roles

* `delete_organisations_party_id_roles_role_id_` - Delete a role
* `get_organisations_party_id_roles` - Retrieve a list of roles
* `get_organisations_party_id_roles_role_id_` - Retrieve a role
* `post_organisations_party_id_roles` - Create a role
* `put_organisations_party_id_roles_role_id_` - Update a role

### registered_identifier_types

* `get_classifications_registered_identifier_types` - Retrieve a list of registered identifier types

### roles

* `get_classifications_roles` - Retrieve a list of roles
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
