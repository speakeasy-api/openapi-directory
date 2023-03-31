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

import org.openapis.openapi.models.operations.GetClassificationsAddressTypesHeaders;
import org.openapis.openapi.models.operations.GetClassificationsAddressTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsAddressTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsAddressTypesRequest req = new GetClassificationsAddressTypesRequest() {{
                headers = new GetClassificationsAddressTypesHeaders() {{
                    apiKey = "corrupti";
                }};
            }};            

            GetClassificationsAddressTypesResponse res = sdk.addressTypes.getClassificationsAddressTypes(req);

            if (res.addressTypes.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### addressTypes

* `getClassificationsAddressTypes` - Retrieve a list of address types

### businessNameLifecycleStates

* `getClassificationsBusinessNameLifecycleStates` - Retrieve a list of business name lifecycle states

### businessNames

* `getBusinessNames` - Retrieve a list of business names

### electronicAddressTypes

* `getClassificationsElectronicAddressTypes` - Retrieve a list of electronic address types

### genders

* `getClassificationsGenders` - Retrieve a list of genders

### individuals

* `deleteIndividualsPartyId` - Delete an individual
* `getIndividuals` - Retrieve a list of individuals
* `getIndividualsPartyId` - Retrieve an individual
* `postIndividuals` - Create an individual
* `putIndividualsPartyId` - Update an individual

### individualsAddresses

* `deleteIndividualsPartyIdAddressesAddressId` - Delete an address
* `getIndividualsPartyIdAddresses` - Retrieve a list of addresses
* `getIndividualsPartyIdAddressesAddressId` - Retrieve an address
* `postIndividualsPartyIdAddresses` - Create an address
* `putIndividualsPartyIdAddressesAddressId` - Update an address

### individualsBusinessNames

* `deleteIndividualsPartyIdBusinessNamesProductId` - Delete a business name
* `getIndividualsPartyIdBusinessNames` - Retrieve a list of business names
* `getIndividualsPartyIdBusinessNamesProductId` - Retrieve a business name
* `postIndividualsPartyIdBusinessNames` - Create a business name
* `putIndividualsPartyIdBusinessNamesProductId` - Update a business name

### individualsElectronicAddresses

* `deleteIndividualsPartyIdElectronicAddressesAddressId` - Delete an electronic address
* `getIndividualsPartyIdElectronicAddresses` - Retrieve a list of electronic addresses
* `getIndividualsPartyIdElectronicAddressesAddressId` - Retrieve an electronic address
* `postIndividualsPartyIdElectronicAddresses` - Create an electronic address
* `putIndividualsPartyIdElectronicAddressesAddressId` - Update an electronic address

### individualsLicenses

* `deleteIndividualsPartyIdLicensesProductId` - Delete a license
* `getIndividualsPartyIdLicenses` - Retrieve a list of licenses
* `getIndividualsPartyIdLicensesProductId` - Retrieve a license
* `postIndividualsPartyIdLicenses` - Create a license
* `putIndividualsPartyIdLicensesProductId` - Update a license

### individualsRoles

* `deleteIndividualsPartyIdRolesRoleId` - Delete a role
* `getIndividualsPartyIdRoles` - Retrieve a list of roles
* `getIndividualsPartyIdRolesRoleId` - Retrieve a role
* `postIndividualsPartyIdRoles` - Create a role
* `putIndividualsPartyIdRolesRoleId` - Update a role

### legalEntityTypes

* `getClassificationsLegalEntityTypes` - Retrieve a list of legal entity types

### licenseLifecycleStates

* `getClassificationsLicenseLifecycleStates` - Retrieve a list of license lifecycle states

### licenseTypes

* `getClassificationsLicenseTypes` - Retrieve a list of license types

### licenses

* `getLicenses` - Retrieve a list of licenses

### nameDirections

* `getClassificationsNameDirections` - Retrieve a list of name directions

### namePrefixes

* `getClassificationsNamePrefixes` - Retrieve a list of name prefixes

### nameTypes

* `getClassificationsNameTypes` - Retrieve a list of name types

### organisations

* `deleteOrganisationsPartyId` - Delete an organisation
* `getOrganisations` - Retrieve a list of organisations
* `getOrganisationsPartyId` - Retrieve an organisation
* `postOrganisations` - Create an organisation
* `putOrganisationsPartyId` - Update an organisation

### organisationsAddresses

* `deleteOrganisationsPartyIdAddressesAddressId` - Delete an address
* `getOrganisationsPartyIdAddresses` - Retrieve a list of addresses
* `getOrganisationsPartyIdAddressesAddressId` - Retrieve an address
* `postOrganisationsPartyIdAddresses` - Create an address
* `putOrganisationsPartyIdAddressesAddressId` - Update an address

### organisationsBusinessNames

* `deleteOrganisationsPartyIdBusinessNamesProductId` - Delete a business name
* `getOrganisationsPartyIdBusinessNames` - Retrieve a list of business names
* `getOrganisationsPartyIdBusinessNamesProductId` - Retrieve a business name
* `postOrganisationsPartyIdBusinessNames` - Create a business name
* `putOrganisationsPartyIdBusinessNamesProductId` - Update a business name

### organisationsElectronicAddresses

* `deleteOrganisationsPartyIdElectronicAddressesAddressId` - Delete an electronic address
* `getOrganisationsPartyIdElectronicAddresses` - Retrieve a list of electronic addresses
* `getOrganisationsPartyIdElectronicAddressesAddressId` - Retrieve an electronic address
* `postOrganisationsPartyIdElectronicAddresses` - Create an electronic address
* `putOrganisationsPartyIdElectronicAddressesAddressId` - Update an electronic address

### organisationsLicenses

* `deleteOrganisationsPartyIdLicensesProductId` - Delete a license
* `getOrganisationsPartyIdLicenses` - Retrieve a list of licenses
* `getOrganisationsPartyIdLicensesProductId` - Retrieve a license
* `postOrganisationsPartyIdLicenses` - Create a license
* `putOrganisationsPartyIdLicensesProductId` - Update a license

### organisationsRoles

* `deleteOrganisationsPartyIdRolesRoleId` - Delete a role
* `getOrganisationsPartyIdRoles` - Retrieve a list of roles
* `getOrganisationsPartyIdRolesRoleId` - Retrieve a role
* `postOrganisationsPartyIdRoles` - Create a role
* `putOrganisationsPartyIdRolesRoleId` - Update a role

### registeredIdentifierTypes

* `getClassificationsRegisteredIdentifierTypes` - Retrieve a list of registered identifier types

### roles

* `getClassificationsRoles` - Retrieve a list of roles
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
