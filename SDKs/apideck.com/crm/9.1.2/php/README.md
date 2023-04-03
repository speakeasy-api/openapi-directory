# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### activities

* `activitiesAdd` - Create activity
* `activitiesAll` - List activities
* `activitiesDelete` - Delete activity
* `activitiesOne` - Get activity
* `activitiesUpdate` - Update activity

### companies

* `companiesAdd` - Create company
* `companiesAll` - List companies
* `companiesDelete` - Delete company
* `companiesOne` - Get company
* `companiesUpdate` - Update company

### contacts

* `contactsAdd` - Create contact
* `contactsAll` - List contacts
* `contactsDelete` - Delete contact
* `contactsOne` - Get contact
* `contactsUpdate` - Update contact

### leads

* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead

### notes

* `notesAdd` - Create note
* `notesAll` - List notes
* `notesDelete` - Delete note
* `notesOne` - Get note
* `notesUpdate` - Update note

### opportunities

* `opportunitiesAdd` - Create opportunity
* `opportunitiesAll` - List opportunities
* `opportunitiesDelete` - Delete opportunity
* `opportunitiesOne` - Get opportunity
* `opportunitiesUpdate` - Update opportunity

### pipelines

* `pipelinesAdd` - Create pipeline
* `pipelinesAll` - List pipelines
* `pipelinesDelete` - Delete pipeline
* `pipelinesOne` - Get pipeline
* `pipelinesUpdate` - Update pipeline

### users

* `usersAdd` - Create user
* `usersAll` - List users
* `usersDelete` - Delete user
* `usersOne` - Get user
* `usersUpdate` - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
