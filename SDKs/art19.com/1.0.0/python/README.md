# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/art19.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetClassificationsRequest(
    ids=[
        "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
        "b7392059-2939-46fe-a759-6eb10faaa235",
    ],
    is_country="explicabo",
    page_number=750686,
    page_size=315428,
    q="omnis",
    sort=[
        "created_at",
        "updated_at",
    ],
    type="AlternateFeedType",
)
    
res = s.classification.get_classifications(req, operations.GetClassificationsSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_classifications_200_application_vnd_api_plus_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### classification

* `get_classifications` - Get a list of classifications
* `get_classifications_id_` - Get a specific classification

### classification_inclusion

* `get_classification_inclusions` - Get ClassificationInclusion records
* `get_classification_inclusions_id_` - Get a specific classification inclusion

### credit

* `get_credits` - Get a list of credits
* `get_credits_id_` - Get a specific credit

### episode

* `get_episodes` - Get a list of episodes
* `get_episodes_id_` - Get a specific episode
* `get_episodes_id_next_sibling` - Get the episode released right after the specified one
* `get_episodes_id_previous_sibling` - Get the episode released right before the specified one

### image

* `get_images` - Get a list of images
* `get_images_id_` - Get a specific image

### media_asset

* `get_media_assets` - Get a list of media assets
* `get_media_assets_id_` - Get a specific media asset

### network

* `get_networks` - Get a list of networks
* `get_networks_id_` - Get a specific network

### person

* `get_people` - Get a list of people
* `get_people_id_` - Get a specific person

### season

* `get_seasons` - Get a list of seasons
* `get_seasons_id_` - Get a specific season

### series

* `get_series` - Get a list of series
* `get_series_id_` - Get a specific series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
