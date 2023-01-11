<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CampaignAnalyticsRequest(
    query_params=operations.CampaignAnalyticsQueryParams(
        campaign_id="cumque",
        ending_at="tenetur",
        length="non",
    ),
)
    
res = s.campaign.campaign_analytics(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->