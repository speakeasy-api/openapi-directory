# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsAddressTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsAddressTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsAddressTypesRequest req = new GetClassificationsAddressTypesRequest("corrupti");            

            GetClassificationsAddressTypesResponse res = sdk.addressTypes.getClassificationsAddressTypes(req);

            if (res.addressTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addressTypes](docs/addresstypes/README.md)

* [getClassificationsAddressTypes](docs/addresstypes/README.md#getclassificationsaddresstypes) - Retrieve a list of address types

### [businessNameLifecycleStates](docs/businessnamelifecyclestates/README.md)

* [getClassificationsBusinessNameLifecycleStates](docs/businessnamelifecyclestates/README.md#getclassificationsbusinessnamelifecyclestates) - Retrieve a list of business name lifecycle states

### [businessNames](docs/businessnames/README.md)

* [getBusinessNames](docs/businessnames/README.md#getbusinessnames) - Retrieve a list of business names

### [electronicAddressTypes](docs/electronicaddresstypes/README.md)

* [getClassificationsElectronicAddressTypes](docs/electronicaddresstypes/README.md#getclassificationselectronicaddresstypes) - Retrieve a list of electronic address types

### [genders](docs/genders/README.md)

* [getClassificationsGenders](docs/genders/README.md#getclassificationsgenders) - Retrieve a list of genders

### [individuals](docs/individuals/README.md)

* [deleteIndividualsPartyId](docs/individuals/README.md#deleteindividualspartyid) - Delete an individual
* [getIndividuals](docs/individuals/README.md#getindividuals) - Retrieve a list of individuals
* [getIndividualsPartyId](docs/individuals/README.md#getindividualspartyid) - Retrieve an individual
* [postIndividuals](docs/individuals/README.md#postindividuals) - Create an individual
* [putIndividualsPartyId](docs/individuals/README.md#putindividualspartyid) - Update an individual

### [individualsAddresses](docs/individualsaddresses/README.md)

* [deleteIndividualsPartyIdAddressesAddressId](docs/individualsaddresses/README.md#deleteindividualspartyidaddressesaddressid) - Delete an address
* [getIndividualsPartyIdAddresses](docs/individualsaddresses/README.md#getindividualspartyidaddresses) - Retrieve a list of addresses
* [getIndividualsPartyIdAddressesAddressId](docs/individualsaddresses/README.md#getindividualspartyidaddressesaddressid) - Retrieve an address
* [postIndividualsPartyIdAddresses](docs/individualsaddresses/README.md#postindividualspartyidaddresses) - Create an address
* [putIndividualsPartyIdAddressesAddressId](docs/individualsaddresses/README.md#putindividualspartyidaddressesaddressid) - Update an address

### [individualsBusinessNames](docs/individualsbusinessnames/README.md)

* [deleteIndividualsPartyIdBusinessNamesProductId](docs/individualsbusinessnames/README.md#deleteindividualspartyidbusinessnamesproductid) - Delete a business name
* [getIndividualsPartyIdBusinessNames](docs/individualsbusinessnames/README.md#getindividualspartyidbusinessnames) - Retrieve a list of business names
* [getIndividualsPartyIdBusinessNamesProductId](docs/individualsbusinessnames/README.md#getindividualspartyidbusinessnamesproductid) - Retrieve a business name
* [postIndividualsPartyIdBusinessNames](docs/individualsbusinessnames/README.md#postindividualspartyidbusinessnames) - Create a business name
* [putIndividualsPartyIdBusinessNamesProductId](docs/individualsbusinessnames/README.md#putindividualspartyidbusinessnamesproductid) - Update a business name

### [individualsElectronicAddresses](docs/individualselectronicaddresses/README.md)

* [deleteIndividualsPartyIdElectronicAddressesAddressId](docs/individualselectronicaddresses/README.md#deleteindividualspartyidelectronicaddressesaddressid) - Delete an electronic address
* [getIndividualsPartyIdElectronicAddresses](docs/individualselectronicaddresses/README.md#getindividualspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [getIndividualsPartyIdElectronicAddressesAddressId](docs/individualselectronicaddresses/README.md#getindividualspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [postIndividualsPartyIdElectronicAddresses](docs/individualselectronicaddresses/README.md#postindividualspartyidelectronicaddresses) - Create an electronic address
* [putIndividualsPartyIdElectronicAddressesAddressId](docs/individualselectronicaddresses/README.md#putindividualspartyidelectronicaddressesaddressid) - Update an electronic address

### [individualsLicenses](docs/individualslicenses/README.md)

* [deleteIndividualsPartyIdLicensesProductId](docs/individualslicenses/README.md#deleteindividualspartyidlicensesproductid) - Delete a license
* [getIndividualsPartyIdLicenses](docs/individualslicenses/README.md#getindividualspartyidlicenses) - Retrieve a list of licenses
* [getIndividualsPartyIdLicensesProductId](docs/individualslicenses/README.md#getindividualspartyidlicensesproductid) - Retrieve a license
* [postIndividualsPartyIdLicenses](docs/individualslicenses/README.md#postindividualspartyidlicenses) - Create a license
* [putIndividualsPartyIdLicensesProductId](docs/individualslicenses/README.md#putindividualspartyidlicensesproductid) - Update a license

### [individualsRoles](docs/individualsroles/README.md)

* [deleteIndividualsPartyIdRolesRoleId](docs/individualsroles/README.md#deleteindividualspartyidrolesroleid) - Delete a role
* [getIndividualsPartyIdRoles](docs/individualsroles/README.md#getindividualspartyidroles) - Retrieve a list of roles
* [getIndividualsPartyIdRolesRoleId](docs/individualsroles/README.md#getindividualspartyidrolesroleid) - Retrieve a role
* [postIndividualsPartyIdRoles](docs/individualsroles/README.md#postindividualspartyidroles) - Create a role
* [putIndividualsPartyIdRolesRoleId](docs/individualsroles/README.md#putindividualspartyidrolesroleid) - Update a role

### [legalEntityTypes](docs/legalentitytypes/README.md)

* [getClassificationsLegalEntityTypes](docs/legalentitytypes/README.md#getclassificationslegalentitytypes) - Retrieve a list of legal entity types

### [licenseLifecycleStates](docs/licenselifecyclestates/README.md)

* [getClassificationsLicenseLifecycleStates](docs/licenselifecyclestates/README.md#getclassificationslicenselifecyclestates) - Retrieve a list of license lifecycle states

### [licenseTypes](docs/licensetypes/README.md)

* [getClassificationsLicenseTypes](docs/licensetypes/README.md#getclassificationslicensetypes) - Retrieve a list of license types

### [licenses](docs/licenses/README.md)

* [getLicenses](docs/licenses/README.md#getlicenses) - Retrieve a list of licenses

### [nameDirections](docs/namedirections/README.md)

* [getClassificationsNameDirections](docs/namedirections/README.md#getclassificationsnamedirections) - Retrieve a list of name directions

### [namePrefixes](docs/nameprefixes/README.md)

* [getClassificationsNamePrefixes](docs/nameprefixes/README.md#getclassificationsnameprefixes) - Retrieve a list of name prefixes

### [nameTypes](docs/nametypes/README.md)

* [getClassificationsNameTypes](docs/nametypes/README.md#getclassificationsnametypes) - Retrieve a list of name types

### [organisations](docs/organisations/README.md)

* [deleteOrganisationsPartyId](docs/organisations/README.md#deleteorganisationspartyid) - Delete an organisation
* [getOrganisations](docs/organisations/README.md#getorganisations) - Retrieve a list of organisations
* [getOrganisationsPartyId](docs/organisations/README.md#getorganisationspartyid) - Retrieve an organisation
* [postOrganisations](docs/organisations/README.md#postorganisations) - Create an organisation
* [putOrganisationsPartyId](docs/organisations/README.md#putorganisationspartyid) - Update an organisation

### [organisationsAddresses](docs/organisationsaddresses/README.md)

* [deleteOrganisationsPartyIdAddressesAddressId](docs/organisationsaddresses/README.md#deleteorganisationspartyidaddressesaddressid) - Delete an address
* [getOrganisationsPartyIdAddresses](docs/organisationsaddresses/README.md#getorganisationspartyidaddresses) - Retrieve a list of addresses
* [getOrganisationsPartyIdAddressesAddressId](docs/organisationsaddresses/README.md#getorganisationspartyidaddressesaddressid) - Retrieve an address
* [postOrganisationsPartyIdAddresses](docs/organisationsaddresses/README.md#postorganisationspartyidaddresses) - Create an address
* [putOrganisationsPartyIdAddressesAddressId](docs/organisationsaddresses/README.md#putorganisationspartyidaddressesaddressid) - Update an address

### [organisationsBusinessNames](docs/organisationsbusinessnames/README.md)

* [deleteOrganisationsPartyIdBusinessNamesProductId](docs/organisationsbusinessnames/README.md#deleteorganisationspartyidbusinessnamesproductid) - Delete a business name
* [getOrganisationsPartyIdBusinessNames](docs/organisationsbusinessnames/README.md#getorganisationspartyidbusinessnames) - Retrieve a list of business names
* [getOrganisationsPartyIdBusinessNamesProductId](docs/organisationsbusinessnames/README.md#getorganisationspartyidbusinessnamesproductid) - Retrieve a business name
* [postOrganisationsPartyIdBusinessNames](docs/organisationsbusinessnames/README.md#postorganisationspartyidbusinessnames) - Create a business name
* [putOrganisationsPartyIdBusinessNamesProductId](docs/organisationsbusinessnames/README.md#putorganisationspartyidbusinessnamesproductid) - Update a business name

### [organisationsElectronicAddresses](docs/organisationselectronicaddresses/README.md)

* [deleteOrganisationsPartyIdElectronicAddressesAddressId](docs/organisationselectronicaddresses/README.md#deleteorganisationspartyidelectronicaddressesaddressid) - Delete an electronic address
* [getOrganisationsPartyIdElectronicAddresses](docs/organisationselectronicaddresses/README.md#getorganisationspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [getOrganisationsPartyIdElectronicAddressesAddressId](docs/organisationselectronicaddresses/README.md#getorganisationspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [postOrganisationsPartyIdElectronicAddresses](docs/organisationselectronicaddresses/README.md#postorganisationspartyidelectronicaddresses) - Create an electronic address
* [putOrganisationsPartyIdElectronicAddressesAddressId](docs/organisationselectronicaddresses/README.md#putorganisationspartyidelectronicaddressesaddressid) - Update an electronic address

### [organisationsLicenses](docs/organisationslicenses/README.md)

* [deleteOrganisationsPartyIdLicensesProductId](docs/organisationslicenses/README.md#deleteorganisationspartyidlicensesproductid) - Delete a license
* [getOrganisationsPartyIdLicenses](docs/organisationslicenses/README.md#getorganisationspartyidlicenses) - Retrieve a list of licenses
* [getOrganisationsPartyIdLicensesProductId](docs/organisationslicenses/README.md#getorganisationspartyidlicensesproductid) - Retrieve a license
* [postOrganisationsPartyIdLicenses](docs/organisationslicenses/README.md#postorganisationspartyidlicenses) - Create a license
* [putOrganisationsPartyIdLicensesProductId](docs/organisationslicenses/README.md#putorganisationspartyidlicensesproductid) - Update a license

### [organisationsRoles](docs/organisationsroles/README.md)

* [deleteOrganisationsPartyIdRolesRoleId](docs/organisationsroles/README.md#deleteorganisationspartyidrolesroleid) - Delete a role
* [getOrganisationsPartyIdRoles](docs/organisationsroles/README.md#getorganisationspartyidroles) - Retrieve a list of roles
* [getOrganisationsPartyIdRolesRoleId](docs/organisationsroles/README.md#getorganisationspartyidrolesroleid) - Retrieve a role
* [postOrganisationsPartyIdRoles](docs/organisationsroles/README.md#postorganisationspartyidroles) - Create a role
* [putOrganisationsPartyIdRolesRoleId](docs/organisationsroles/README.md#putorganisationspartyidrolesroleid) - Update a role

### [registeredIdentifierTypes](docs/registeredidentifiertypes/README.md)

* [getClassificationsRegisteredIdentifierTypes](docs/registeredidentifiertypes/README.md#getclassificationsregisteredidentifiertypes) - Retrieve a list of registered identifier types

### [roles](docs/roles/README.md)

* [getClassificationsRoles](docs/roles/README.md#getclassificationsroles) - Retrieve a list of roles
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
