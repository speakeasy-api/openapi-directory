<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchCreateCustomVocabularyItemRequest(
    request_body=operations.BatchCreateCustomVocabularyItemRequestBody(
        custom_vocabulary_item_list=[
            shared.NewCustomVocabularyItem(
                display_as="provident",
                phrase="distinctio",
                weight=844266,
            ),
            shared.NewCustomVocabularyItem(
                display_as="unde",
                phrase="nulla",
                weight=544883,
            ),
            shared.NewCustomVocabularyItem(
                display_as="illum",
                phrase="vel",
                weight=623564,
            ),
        ],
    ),
    x_amz_algorithm="deserunt",
    x_amz_content_sha256="suscipit",
    x_amz_credential="iure",
    x_amz_date="magnam",
    x_amz_security_token="debitis",
    x_amz_signature="ipsa",
    x_amz_signed_headers="delectus",
    bot_id="tempora",
    bot_version="suscipit",
    locale_id="molestiae",
)
    
res = s.batch_create_custom_vocabulary_item(req)

if res.batch_create_custom_vocabulary_item_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->