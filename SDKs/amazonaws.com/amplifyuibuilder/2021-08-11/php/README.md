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

### SDK SDK

* `createComponent` - Creates a new component for an Amplify app.
* `createForm` - Creates a new form for an Amplify app.
* `createTheme` - Creates a theme to apply to the components in an Amplify app.
* `deleteComponent` - Deletes a component from an Amplify app.
* `deleteForm` - Deletes a form from an Amplify app.
* `deleteTheme` - Deletes a theme from an Amplify app.
* `exchangeCodeForToken` - Exchanges an access code for a token.
* `exportComponents` - Exports component configurations to code that is ready to integrate into an Amplify app.
* `exportForms` - Exports form configurations to code that is ready to integrate into an Amplify app.
* `exportThemes` - Exports theme configurations to code that is ready to integrate into an Amplify app.
* `getComponent` - Returns an existing component for an Amplify app.
* `getForm` - Returns an existing form for an Amplify app.
* `getMetadata` - Returns existing metadata for an Amplify app.
* `getTheme` - Returns an existing theme for an Amplify app.
* `listComponents` - Retrieves a list of components for a specified Amplify app and backend environment.
* `listForms` - Retrieves a list of forms for a specified Amplify app and backend environment.
* `listThemes` - Retrieves a list of themes for a specified Amplify app and backend environment.
* `putMetadataFlag` - Stores the metadata information about a feature on a form or view.
* `refreshToken` - Refreshes a previously issued access token that might have expired.
* `updateComponent` - Updates an existing component.
* `updateForm` - Updates an existing form.
* `updateTheme` - Updates an existing theme.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
