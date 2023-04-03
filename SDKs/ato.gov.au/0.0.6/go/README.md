# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ato.gov.au/0.0.6/go
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

    req := operations.GetClassificationsAddressTypesRequest{
        APIKey: "corrupti",
    }

    ctx := context.Background()
    res, err := s.AddressTypes.GetClassificationsAddressTypes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddressTypes != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AddressTypes

* `GetClassificationsAddressTypes` - Retrieve a list of address types

### BusinessNameLifecycleStates

* `GetClassificationsBusinessNameLifecycleStates` - Retrieve a list of business name lifecycle states

### BusinessNames

* `GetBusinessNames` - Retrieve a list of business names

### ElectronicAddressTypes

* `GetClassificationsElectronicAddressTypes` - Retrieve a list of electronic address types

### Genders

* `GetClassificationsGenders` - Retrieve a list of genders

### Individuals

* `DeleteIndividualsPartyID` - Delete an individual
* `GetIndividuals` - Retrieve a list of individuals
* `GetIndividualsPartyID` - Retrieve an individual
* `PostIndividuals` - Create an individual
* `PutIndividualsPartyID` - Update an individual

### IndividualsAddresses

* `DeleteIndividualsPartyIDAddressesAddressID` - Delete an address
* `GetIndividualsPartyIDAddresses` - Retrieve a list of addresses
* `GetIndividualsPartyIDAddressesAddressID` - Retrieve an address
* `PostIndividualsPartyIDAddresses` - Create an address
* `PutIndividualsPartyIDAddressesAddressID` - Update an address

### IndividualsBusinessNames

* `DeleteIndividualsPartyIDBusinessNamesProductID` - Delete a business name
* `GetIndividualsPartyIDBusinessNames` - Retrieve a list of business names
* `GetIndividualsPartyIDBusinessNamesProductID` - Retrieve a business name
* `PostIndividualsPartyIDBusinessNames` - Create a business name
* `PutIndividualsPartyIDBusinessNamesProductID` - Update a business name

### IndividualsElectronicAddresses

* `DeleteIndividualsPartyIDElectronicAddressesAddressID` - Delete an electronic address
* `GetIndividualsPartyIDElectronicAddresses` - Retrieve a list of electronic addresses
* `GetIndividualsPartyIDElectronicAddressesAddressID` - Retrieve an electronic address
* `PostIndividualsPartyIDElectronicAddresses` - Create an electronic address
* `PutIndividualsPartyIDElectronicAddressesAddressID` - Update an electronic address

### IndividualsLicenses

* `DeleteIndividualsPartyIDLicensesProductID` - Delete a license
* `GetIndividualsPartyIDLicenses` - Retrieve a list of licenses
* `GetIndividualsPartyIDLicensesProductID` - Retrieve a license
* `PostIndividualsPartyIDLicenses` - Create a license
* `PutIndividualsPartyIDLicensesProductID` - Update a license

### IndividualsRoles

* `DeleteIndividualsPartyIDRolesRoleID` - Delete a role
* `GetIndividualsPartyIDRoles` - Retrieve a list of roles
* `GetIndividualsPartyIDRolesRoleID` - Retrieve a role
* `PostIndividualsPartyIDRoles` - Create a role
* `PutIndividualsPartyIDRolesRoleID` - Update a role

### LegalEntityTypes

* `GetClassificationsLegalEntityTypes` - Retrieve a list of legal entity types

### LicenseLifecycleStates

* `GetClassificationsLicenseLifecycleStates` - Retrieve a list of license lifecycle states

### LicenseTypes

* `GetClassificationsLicenseTypes` - Retrieve a list of license types

### Licenses

* `GetLicenses` - Retrieve a list of licenses

### NameDirections

* `GetClassificationsNameDirections` - Retrieve a list of name directions

### NamePrefixes

* `GetClassificationsNamePrefixes` - Retrieve a list of name prefixes

### NameTypes

* `GetClassificationsNameTypes` - Retrieve a list of name types

### Organisations

* `DeleteOrganisationsPartyID` - Delete an organisation
* `GetOrganisations` - Retrieve a list of organisations
* `GetOrganisationsPartyID` - Retrieve an organisation
* `PostOrganisations` - Create an organisation
* `PutOrganisationsPartyID` - Update an organisation

### OrganisationsAddresses

* `DeleteOrganisationsPartyIDAddressesAddressID` - Delete an address
* `GetOrganisationsPartyIDAddresses` - Retrieve a list of addresses
* `GetOrganisationsPartyIDAddressesAddressID` - Retrieve an address
* `PostOrganisationsPartyIDAddresses` - Create an address
* `PutOrganisationsPartyIDAddressesAddressID` - Update an address

### OrganisationsBusinessNames

* `DeleteOrganisationsPartyIDBusinessNamesProductID` - Delete a business name
* `GetOrganisationsPartyIDBusinessNames` - Retrieve a list of business names
* `GetOrganisationsPartyIDBusinessNamesProductID` - Retrieve a business name
* `PostOrganisationsPartyIDBusinessNames` - Create a business name
* `PutOrganisationsPartyIDBusinessNamesProductID` - Update a business name

### OrganisationsElectronicAddresses

* `DeleteOrganisationsPartyIDElectronicAddressesAddressID` - Delete an electronic address
* `GetOrganisationsPartyIDElectronicAddresses` - Retrieve a list of electronic addresses
* `GetOrganisationsPartyIDElectronicAddressesAddressID` - Retrieve an electronic address
* `PostOrganisationsPartyIDElectronicAddresses` - Create an electronic address
* `PutOrganisationsPartyIDElectronicAddressesAddressID` - Update an electronic address

### OrganisationsLicenses

* `DeleteOrganisationsPartyIDLicensesProductID` - Delete a license
* `GetOrganisationsPartyIDLicenses` - Retrieve a list of licenses
* `GetOrganisationsPartyIDLicensesProductID` - Retrieve a license
* `PostOrganisationsPartyIDLicenses` - Create a license
* `PutOrganisationsPartyIDLicensesProductID` - Update a license

### OrganisationsRoles

* `DeleteOrganisationsPartyIDRolesRoleID` - Delete a role
* `GetOrganisationsPartyIDRoles` - Retrieve a list of roles
* `GetOrganisationsPartyIDRolesRoleID` - Retrieve a role
* `PostOrganisationsPartyIDRoles` - Create a role
* `PutOrganisationsPartyIDRolesRoleID` - Update a role

### RegisteredIdentifierTypes

* `GetClassificationsRegisteredIdentifierTypes` - Retrieve a list of registered identifier types

### Roles

* `GetClassificationsRoles` - Retrieve a list of roles
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
