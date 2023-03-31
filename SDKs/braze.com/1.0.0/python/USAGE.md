<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CampaignAnalyticsRequest(
    campaign_id="{{campaign_identifier}}",
    ending_at="2020-06-28T23:59:59-5:00",
    length="7",
)
    
res = s.campaign.campaign_analytics(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->