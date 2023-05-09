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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AddressTypes.GetClassificationsAddressTypes(ctx, operations.GetClassificationsAddressTypesRequest{
        APIKey: "corrupti",
    })
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


### [AddressTypes](docs/addresstypes/README.md)

* [GetClassificationsAddressTypes](docs/addresstypes/README.md#getclassificationsaddresstypes) - Retrieve a list of address types

### [BusinessNameLifecycleStates](docs/businessnamelifecyclestates/README.md)

* [GetClassificationsBusinessNameLifecycleStates](docs/businessnamelifecyclestates/README.md#getclassificationsbusinessnamelifecyclestates) - Retrieve a list of business name lifecycle states

### [BusinessNames](docs/businessnames/README.md)

* [GetBusinessNames](docs/businessnames/README.md#getbusinessnames) - Retrieve a list of business names

### [ElectronicAddressTypes](docs/electronicaddresstypes/README.md)

* [GetClassificationsElectronicAddressTypes](docs/electronicaddresstypes/README.md#getclassificationselectronicaddresstypes) - Retrieve a list of electronic address types

### [Genders](docs/genders/README.md)

* [GetClassificationsGenders](docs/genders/README.md#getclassificationsgenders) - Retrieve a list of genders

### [Individuals](docs/individuals/README.md)

* [DeleteIndividualsPartyID](docs/individuals/README.md#deleteindividualspartyid) - Delete an individual
* [GetIndividuals](docs/individuals/README.md#getindividuals) - Retrieve a list of individuals
* [GetIndividualsPartyID](docs/individuals/README.md#getindividualspartyid) - Retrieve an individual
* [PostIndividuals](docs/individuals/README.md#postindividuals) - Create an individual
* [PutIndividualsPartyID](docs/individuals/README.md#putindividualspartyid) - Update an individual

### [IndividualsAddresses](docs/individualsaddresses/README.md)

* [DeleteIndividualsPartyIDAddressesAddressID](docs/individualsaddresses/README.md#deleteindividualspartyidaddressesaddressid) - Delete an address
* [GetIndividualsPartyIDAddresses](docs/individualsaddresses/README.md#getindividualspartyidaddresses) - Retrieve a list of addresses
* [GetIndividualsPartyIDAddressesAddressID](docs/individualsaddresses/README.md#getindividualspartyidaddressesaddressid) - Retrieve an address
* [PostIndividualsPartyIDAddresses](docs/individualsaddresses/README.md#postindividualspartyidaddresses) - Create an address
* [PutIndividualsPartyIDAddressesAddressID](docs/individualsaddresses/README.md#putindividualspartyidaddressesaddressid) - Update an address

### [IndividualsBusinessNames](docs/individualsbusinessnames/README.md)

* [DeleteIndividualsPartyIDBusinessNamesProductID](docs/individualsbusinessnames/README.md#deleteindividualspartyidbusinessnamesproductid) - Delete a business name
* [GetIndividualsPartyIDBusinessNames](docs/individualsbusinessnames/README.md#getindividualspartyidbusinessnames) - Retrieve a list of business names
* [GetIndividualsPartyIDBusinessNamesProductID](docs/individualsbusinessnames/README.md#getindividualspartyidbusinessnamesproductid) - Retrieve a business name
* [PostIndividualsPartyIDBusinessNames](docs/individualsbusinessnames/README.md#postindividualspartyidbusinessnames) - Create a business name
* [PutIndividualsPartyIDBusinessNamesProductID](docs/individualsbusinessnames/README.md#putindividualspartyidbusinessnamesproductid) - Update a business name

### [IndividualsElectronicAddresses](docs/individualselectronicaddresses/README.md)

* [DeleteIndividualsPartyIDElectronicAddressesAddressID](docs/individualselectronicaddresses/README.md#deleteindividualspartyidelectronicaddressesaddressid) - Delete an electronic address
* [GetIndividualsPartyIDElectronicAddresses](docs/individualselectronicaddresses/README.md#getindividualspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [GetIndividualsPartyIDElectronicAddressesAddressID](docs/individualselectronicaddresses/README.md#getindividualspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [PostIndividualsPartyIDElectronicAddresses](docs/individualselectronicaddresses/README.md#postindividualspartyidelectronicaddresses) - Create an electronic address
* [PutIndividualsPartyIDElectronicAddressesAddressID](docs/individualselectronicaddresses/README.md#putindividualspartyidelectronicaddressesaddressid) - Update an electronic address

### [IndividualsLicenses](docs/individualslicenses/README.md)

* [DeleteIndividualsPartyIDLicensesProductID](docs/individualslicenses/README.md#deleteindividualspartyidlicensesproductid) - Delete a license
* [GetIndividualsPartyIDLicenses](docs/individualslicenses/README.md#getindividualspartyidlicenses) - Retrieve a list of licenses
* [GetIndividualsPartyIDLicensesProductID](docs/individualslicenses/README.md#getindividualspartyidlicensesproductid) - Retrieve a license
* [PostIndividualsPartyIDLicenses](docs/individualslicenses/README.md#postindividualspartyidlicenses) - Create a license
* [PutIndividualsPartyIDLicensesProductID](docs/individualslicenses/README.md#putindividualspartyidlicensesproductid) - Update a license

### [IndividualsRoles](docs/individualsroles/README.md)

* [DeleteIndividualsPartyIDRolesRoleID](docs/individualsroles/README.md#deleteindividualspartyidrolesroleid) - Delete a role
* [GetIndividualsPartyIDRoles](docs/individualsroles/README.md#getindividualspartyidroles) - Retrieve a list of roles
* [GetIndividualsPartyIDRolesRoleID](docs/individualsroles/README.md#getindividualspartyidrolesroleid) - Retrieve a role
* [PostIndividualsPartyIDRoles](docs/individualsroles/README.md#postindividualspartyidroles) - Create a role
* [PutIndividualsPartyIDRolesRoleID](docs/individualsroles/README.md#putindividualspartyidrolesroleid) - Update a role

### [LegalEntityTypes](docs/legalentitytypes/README.md)

* [GetClassificationsLegalEntityTypes](docs/legalentitytypes/README.md#getclassificationslegalentitytypes) - Retrieve a list of legal entity types

### [LicenseLifecycleStates](docs/licenselifecyclestates/README.md)

* [GetClassificationsLicenseLifecycleStates](docs/licenselifecyclestates/README.md#getclassificationslicenselifecyclestates) - Retrieve a list of license lifecycle states

### [LicenseTypes](docs/licensetypes/README.md)

* [GetClassificationsLicenseTypes](docs/licensetypes/README.md#getclassificationslicensetypes) - Retrieve a list of license types

### [Licenses](docs/licenses/README.md)

* [GetLicenses](docs/licenses/README.md#getlicenses) - Retrieve a list of licenses

### [NameDirections](docs/namedirections/README.md)

* [GetClassificationsNameDirections](docs/namedirections/README.md#getclassificationsnamedirections) - Retrieve a list of name directions

### [NamePrefixes](docs/nameprefixes/README.md)

* [GetClassificationsNamePrefixes](docs/nameprefixes/README.md#getclassificationsnameprefixes) - Retrieve a list of name prefixes

### [NameTypes](docs/nametypes/README.md)

* [GetClassificationsNameTypes](docs/nametypes/README.md#getclassificationsnametypes) - Retrieve a list of name types

### [Organisations](docs/organisations/README.md)

* [DeleteOrganisationsPartyID](docs/organisations/README.md#deleteorganisationspartyid) - Delete an organisation
* [GetOrganisations](docs/organisations/README.md#getorganisations) - Retrieve a list of organisations
* [GetOrganisationsPartyID](docs/organisations/README.md#getorganisationspartyid) - Retrieve an organisation
* [PostOrganisations](docs/organisations/README.md#postorganisations) - Create an organisation
* [PutOrganisationsPartyID](docs/organisations/README.md#putorganisationspartyid) - Update an organisation

### [OrganisationsAddresses](docs/organisationsaddresses/README.md)

* [DeleteOrganisationsPartyIDAddressesAddressID](docs/organisationsaddresses/README.md#deleteorganisationspartyidaddressesaddressid) - Delete an address
* [GetOrganisationsPartyIDAddresses](docs/organisationsaddresses/README.md#getorganisationspartyidaddresses) - Retrieve a list of addresses
* [GetOrganisationsPartyIDAddressesAddressID](docs/organisationsaddresses/README.md#getorganisationspartyidaddressesaddressid) - Retrieve an address
* [PostOrganisationsPartyIDAddresses](docs/organisationsaddresses/README.md#postorganisationspartyidaddresses) - Create an address
* [PutOrganisationsPartyIDAddressesAddressID](docs/organisationsaddresses/README.md#putorganisationspartyidaddressesaddressid) - Update an address

### [OrganisationsBusinessNames](docs/organisationsbusinessnames/README.md)

* [DeleteOrganisationsPartyIDBusinessNamesProductID](docs/organisationsbusinessnames/README.md#deleteorganisationspartyidbusinessnamesproductid) - Delete a business name
* [GetOrganisationsPartyIDBusinessNames](docs/organisationsbusinessnames/README.md#getorganisationspartyidbusinessnames) - Retrieve a list of business names
* [GetOrganisationsPartyIDBusinessNamesProductID](docs/organisationsbusinessnames/README.md#getorganisationspartyidbusinessnamesproductid) - Retrieve a business name
* [PostOrganisationsPartyIDBusinessNames](docs/organisationsbusinessnames/README.md#postorganisationspartyidbusinessnames) - Create a business name
* [PutOrganisationsPartyIDBusinessNamesProductID](docs/organisationsbusinessnames/README.md#putorganisationspartyidbusinessnamesproductid) - Update a business name

### [OrganisationsElectronicAddresses](docs/organisationselectronicaddresses/README.md)

* [DeleteOrganisationsPartyIDElectronicAddressesAddressID](docs/organisationselectronicaddresses/README.md#deleteorganisationspartyidelectronicaddressesaddressid) - Delete an electronic address
* [GetOrganisationsPartyIDElectronicAddresses](docs/organisationselectronicaddresses/README.md#getorganisationspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [GetOrganisationsPartyIDElectronicAddressesAddressID](docs/organisationselectronicaddresses/README.md#getorganisationspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [PostOrganisationsPartyIDElectronicAddresses](docs/organisationselectronicaddresses/README.md#postorganisationspartyidelectronicaddresses) - Create an electronic address
* [PutOrganisationsPartyIDElectronicAddressesAddressID](docs/organisationselectronicaddresses/README.md#putorganisationspartyidelectronicaddressesaddressid) - Update an electronic address

### [OrganisationsLicenses](docs/organisationslicenses/README.md)

* [DeleteOrganisationsPartyIDLicensesProductID](docs/organisationslicenses/README.md#deleteorganisationspartyidlicensesproductid) - Delete a license
* [GetOrganisationsPartyIDLicenses](docs/organisationslicenses/README.md#getorganisationspartyidlicenses) - Retrieve a list of licenses
* [GetOrganisationsPartyIDLicensesProductID](docs/organisationslicenses/README.md#getorganisationspartyidlicensesproductid) - Retrieve a license
* [PostOrganisationsPartyIDLicenses](docs/organisationslicenses/README.md#postorganisationspartyidlicenses) - Create a license
* [PutOrganisationsPartyIDLicensesProductID](docs/organisationslicenses/README.md#putorganisationspartyidlicensesproductid) - Update a license

### [OrganisationsRoles](docs/organisationsroles/README.md)

* [DeleteOrganisationsPartyIDRolesRoleID](docs/organisationsroles/README.md#deleteorganisationspartyidrolesroleid) - Delete a role
* [GetOrganisationsPartyIDRoles](docs/organisationsroles/README.md#getorganisationspartyidroles) - Retrieve a list of roles
* [GetOrganisationsPartyIDRolesRoleID](docs/organisationsroles/README.md#getorganisationspartyidrolesroleid) - Retrieve a role
* [PostOrganisationsPartyIDRoles](docs/organisationsroles/README.md#postorganisationspartyidroles) - Create a role
* [PutOrganisationsPartyIDRolesRoleID](docs/organisationsroles/README.md#putorganisationspartyidrolesroleid) - Update a role

### [RegisteredIdentifierTypes](docs/registeredidentifiertypes/README.md)

* [GetClassificationsRegisteredIdentifierTypes](docs/registeredidentifiertypes/README.md#getclassificationsregisteredidentifiertypes) - Retrieve a list of registered identifier types

### [Roles](docs/roles/README.md)

* [GetClassificationsRoles](docs/roles/README.md#getclassificationsroles) - Retrieve a list of roles
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
