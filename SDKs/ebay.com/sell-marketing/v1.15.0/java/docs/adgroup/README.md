# adGroup

### Available Operations

* [createAdGroup](#createadgroup) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds an ad group to an existing PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />To create an ad group for a campaign, specify the <b>defaultBid</b> for the ad group in the payload of the request. Then specify the campaign to which the ad group should be associated using the <b>campaign_id</b> path parameter.<br /><br />Each campaign can have one or more associated ad groups.
* [getAdGroup](#getadgroup) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves the details of a specified ad group, such as the ad group’s default bid and status.<br /><br />In the request, specify the <b>campaign_id</b> and <b>ad_group_id</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller and call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> for the ad group ID of the ad group you wish to retrieve.
* [getAdGroups](#getadgroups) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves ad groups for the specified campaigns.<br /><br />Each campaign can only have <b>one</b> ad group.<br /><br />In the request, supply the <b>campaign_ids</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller.
* [suggestBids](#suggestbids) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve the suggested bids for input keywords and match type.
* [suggestKeywords](#suggestkeywords) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve a list of keyword ideas to be targeted for Promoted Listings campaigns.
* [updateAdGroup](#updateadgroup) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the ad group associated with a campaign.<br /><br />With this method, you can modify the <b>default bid</b> for the ad group, change the state of the ad group, or change the name of the ad group. Pass the <b>ad_group_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> and <b>defaultBid</b> in the request payload.<br /><br />Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroup">getAdGroup</a> to retrieve the current default bid and status of the ad group that you would like to update.

## createAdGroup

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds an ad group to an existing PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />To create an ad group for a campaign, specify the <b>defaultBid</b> for the ad group in the payload of the request. Then specify the campaign to which the ad group should be associated using the <b>campaign_id</b> path parameter.<br /><br />Each campaign can have one or more associated ad groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAdGroupRequest;
import org.openapis.openapi.models.operations.CreateAdGroupResponse;
import org.openapis.openapi.models.operations.CreateAdGroupSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CreateAdGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAdGroupRequest req = new CreateAdGroupRequest(                new CreateAdGroupRequest() {{
                                defaultBid = new Amount() {{
                                    currency = "quasi";
                                    value = "reiciendis";
                                }};;
                                name = "Caleb Koss";
                            }};, "ipsa");            

            CreateAdGroupResponse res = sdk.adGroup.createAdGroup(req, new CreateAdGroupSecurity("omnis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createAdGroup201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdGroup

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves the details of a specified ad group, such as the ad group’s default bid and status.<br /><br />In the request, specify the <b>campaign_id</b> and <b>ad_group_id</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller and call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> for the ad group ID of the ad group you wish to retrieve.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdGroupRequest;
import org.openapis.openapi.models.operations.GetAdGroupResponse;
import org.openapis.openapi.models.operations.GetAdGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdGroupRequest req = new GetAdGroupRequest("voluptate", "cum");            

            GetAdGroupResponse res = sdk.adGroup.getAdGroup(req, new GetAdGroupSecurity("perferendis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdGroups

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves ad groups for the specified campaigns.<br /><br />Each campaign can only have <b>one</b> ad group.<br /><br />In the request, supply the <b>campaign_ids</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdGroupsRequest;
import org.openapis.openapi.models.operations.GetAdGroupsResponse;
import org.openapis.openapi.models.operations.GetAdGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdGroupsRequest req = new GetAdGroupsRequest("doloremque") {{
                adGroupStatus = "reprehenderit";
                limit = "ut";
                offset = "maiores";
            }};            

            GetAdGroupsResponse res = sdk.adGroup.getAdGroups(req, new GetAdGroupsSecurity("dicta") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adGroupPagedCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suggestBids

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve the suggested bids for input keywords and match type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuggestBidsRequest;
import org.openapis.openapi.models.operations.SuggestBidsResponse;
import org.openapis.openapi.models.operations.SuggestBidsSecurity;
import org.openapis.openapi.models.shared.KeywordRequest;
import org.openapis.openapi.models.shared.TargetedBidRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuggestBidsRequest req = new SuggestBidsRequest(                new TargetedBidRequest() {{
                                keywords = new org.openapis.openapi.models.shared.KeywordRequest[]{{
                                    add(new KeywordRequest() {{
                                        keywordText = "dolore";
                                        matchType = "iusto";
                                    }}),
                                    add(new KeywordRequest() {{
                                        keywordText = "dicta";
                                        matchType = "harum";
                                    }}),
                                }};
                            }};, "enim", "accusamus");            

            SuggestBidsResponse res = sdk.adGroup.suggestBids(req, new SuggestBidsSecurity("commodi") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetedBidsPagedCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suggestKeywords

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve a list of keyword ideas to be targeted for Promoted Listings campaigns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuggestKeywordsRequest;
import org.openapis.openapi.models.operations.SuggestKeywordsResponse;
import org.openapis.openapi.models.operations.SuggestKeywordsSecurity;
import org.openapis.openapi.models.shared.TargetedKeywordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuggestKeywordsRequest req = new SuggestKeywordsRequest("repudiandae", "quae") {{
                targetedKeywordRequest = new TargetedKeywordRequest() {{
                    additionalInfo = new String[]{{
                        add("quidem"),
                    }};
                    exclusions = new String[]{{
                        add("excepturi"),
                        add("pariatur"),
                        add("modi"),
                    }};
                    listingIds = new String[]{{
                        add("rem"),
                        add("voluptates"),
                        add("quasi"),
                    }};
                    matchType = "repudiandae";
                }};;
            }};            

            SuggestKeywordsResponse res = sdk.adGroup.suggestKeywords(req, new SuggestKeywordsSecurity("sint") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetedKeywordsPagedCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAdGroup

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the ad group associated with a campaign.<br /><br />With this method, you can modify the <b>default bid</b> for the ad group, change the state of the ad group, or change the name of the ad group. Pass the <b>ad_group_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> and <b>defaultBid</b> in the request payload.<br /><br />Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroup">getAdGroup</a> to retrieve the current default bid and status of the ad group that you would like to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAdGroupRequest;
import org.openapis.openapi.models.operations.UpdateAdGroupResponse;
import org.openapis.openapi.models.operations.UpdateAdGroupSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.UpdateAdGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAdGroupRequest req = new UpdateAdGroupRequest(                new UpdateAdGroupRequest() {{
                                adGroupStatus = "veritatis";
                                defaultBid = new Amount() {{
                                    currency = "itaque";
                                    value = "incidunt";
                                }};;
                                name = "Elizabeth Orn";
                            }};, "deserunt", "distinctio");            

            UpdateAdGroupResponse res = sdk.adGroup.updateAdGroup(req, new UpdateAdGroupSecurity("quibusdam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
