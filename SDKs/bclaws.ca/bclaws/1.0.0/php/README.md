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


### content

* `getContentAspectId` - Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
* `getContentAspectIdCivixDocumentId` - Lists the metadata available for the specified index or directory from the BCLaws legislative respository

### document

* `getDocumentIdAspectIdCivixIndexIdCivixDocumentId` - Retrieves a specific document from the BCLaws legislative repository (HTML format)
* `getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString` - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
* `getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml` - Retrieves a specific document from the BCLaws legislative repository (XML format)
* `getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString` - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)

### search

* `getSearchAspectIdFullsearch` - A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
