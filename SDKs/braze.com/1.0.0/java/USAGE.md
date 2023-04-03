<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CampaignAnalyticsRequest;
import org.openapis.openapi.models.operations.CampaignAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignAnalyticsRequest req = new CampaignAnalyticsRequest() {{
                campaignId = "{{campaign_identifier}}";
                endingAt = "2020-06-28T23:59:59-5:00";
                length = "7";
            }}            

            CampaignAnalyticsResponse res = sdk.campaign.campaignAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->