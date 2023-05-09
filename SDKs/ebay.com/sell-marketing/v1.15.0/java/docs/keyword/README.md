# keyword

### Available Operations

* [bulkCreateKeyword](#bulkcreatekeyword) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds keywords, in bulk, to an existing PLA ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br />This method also sets the CPC rate for each keyword.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.
* [bulkUpdateKeyword](#bulkupdatekeyword) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the bids and statuses of keywords, in bulk, for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.
* [createKeyword](#createkeyword) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method creates keywords using a specified campaign ID for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/suggestKeywords">suggestKeywords</a> method to retrieve a list of keyword ideas to be targeted for PLA campaigns, and call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.
* [getKeyword](#getkeyword) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific keyword from an ad group within a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.
* [getKeywords](#getkeywords) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> as a path parameter. If one or more <b>ad_group_ids</b> are passed in the request body, the keywords for those ad groups will be returned. If <b>ad_group_ids</b> are not passed in the response body, the call will return all the keywords in the campaign.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.
* [updateKeyword](#updatekeyword) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates keywords using a campaign ID and keyword ID for an existing PLA campaign.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.

## bulkCreateKeyword

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds keywords, in bulk, to an existing PLA ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br />This method also sets the CPC rate for each keyword.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateKeywordRequest;
import org.openapis.openapi.models.operations.BulkCreateKeywordResponse;
import org.openapis.openapi.models.operations.BulkCreateKeywordSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BulkCreateKeywordRequest;
import org.openapis.openapi.models.shared.CreateKeywordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BulkCreateKeywordRequest req = new BulkCreateKeywordRequest(                new BulkCreateKeywordRequest() {{
                                requests = new org.openapis.openapi.models.shared.CreateKeywordRequest[]{{
                                    add(new CreateKeywordRequest() {{
                                        adGroupId = "temporibus";
                                        bid = new Amount() {{
                                            currency = "ullam";
                                            value = "adipisci";
                                        }};
                                        keywordText = "cum";
                                        matchType = "blanditiis";
                                    }}),
                                    add(new CreateKeywordRequest() {{
                                        adGroupId = "quas";
                                        bid = new Amount() {{
                                            currency = "hic";
                                            value = "nesciunt";
                                        }};
                                        keywordText = "culpa";
                                        matchType = "corrupti";
                                    }}),
                                    add(new CreateKeywordRequest() {{
                                        adGroupId = "pariatur";
                                        bid = new Amount() {{
                                            currency = "totam";
                                            value = "hic";
                                        }};
                                        keywordText = "exercitationem";
                                        matchType = "nobis";
                                    }}),
                                    add(new CreateKeywordRequest() {{
                                        adGroupId = "sit";
                                        bid = new Amount() {{
                                            currency = "rerum";
                                            value = "sed";
                                        }};
                                        keywordText = "reiciendis";
                                        matchType = "explicabo";
                                    }}),
                                }};
                            }};, "asperiores");            

            BulkCreateKeywordResponse res = sdk.keyword.bulkCreateKeyword(req, new BulkCreateKeywordSecurity("facilis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkCreateKeywordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkUpdateKeyword

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the bids and statuses of keywords, in bulk, for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateKeywordRequest;
import org.openapis.openapi.models.operations.BulkUpdateKeywordResponse;
import org.openapis.openapi.models.operations.BulkUpdateKeywordSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BulkUpdateKeywordRequest;
import org.openapis.openapi.models.shared.UpdateKeywordByKeywordIdRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BulkUpdateKeywordRequest req = new BulkUpdateKeywordRequest(                new BulkUpdateKeywordRequest() {{
                                requests = new org.openapis.openapi.models.shared.UpdateKeywordByKeywordIdRequest[]{{
                                    add(new UpdateKeywordByKeywordIdRequest() {{
                                        bid = new Amount() {{
                                            currency = "expedita";
                                            value = "ab";
                                        }};
                                        keywordId = "iste";
                                        keywordStatus = "dolore";
                                    }}),
                                    add(new UpdateKeywordByKeywordIdRequest() {{
                                        bid = new Amount() {{
                                            currency = "laborum";
                                            value = "sed";
                                        }};
                                        keywordId = "in";
                                        keywordStatus = "commodi";
                                    }}),
                                }};
                            }};, "quidem");            

            BulkUpdateKeywordResponse res = sdk.keyword.bulkUpdateKeyword(req, new BulkUpdateKeywordSecurity("explicabo") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkUpdateKeywordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createKeyword

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method creates keywords using a specified campaign ID for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/suggestKeywords">suggestKeywords</a> method to retrieve a list of keyword ideas to be targeted for PLA campaigns, and call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateKeywordRequest;
import org.openapis.openapi.models.operations.CreateKeywordResponse;
import org.openapis.openapi.models.operations.CreateKeywordSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CreateKeywordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateKeywordRequest req = new CreateKeywordRequest(                new CreateKeywordRequest() {{
                                adGroupId = "voluptas";
                                bid = new Amount() {{
                                    currency = "unde";
                                    value = "architecto";
                                }};;
                                keywordText = "suscipit";
                                matchType = "sapiente";
                            }};, "debitis");            

            CreateKeywordResponse res = sdk.keyword.createKeyword(req, new CreateKeywordSecurity("illo") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createKeyword201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeyword

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific keyword from an ad group within a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeywordRequest;
import org.openapis.openapi.models.operations.GetKeywordResponse;
import org.openapis.openapi.models.operations.GetKeywordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeywordRequest req = new GetKeywordRequest("reiciendis", "perferendis");            

            GetKeywordResponse res = sdk.keyword.getKeyword(req, new GetKeywordSecurity("corrupti") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.keyword != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeywords

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> as a path parameter. If one or more <b>ad_group_ids</b> are passed in the request body, the keywords for those ad groups will be returned. If <b>ad_group_ids</b> are not passed in the response body, the call will return all the keywords in the campaign.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeywordsRequest;
import org.openapis.openapi.models.operations.GetKeywordsResponse;
import org.openapis.openapi.models.operations.GetKeywordsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeywordsRequest req = new GetKeywordsRequest("maiores") {{
                adGroupIds = "incidunt";
                keywordStatus = "sed";
                limit = "provident";
                offset = "eius";
            }};            

            GetKeywordsResponse res = sdk.keyword.getKeywords(req, new GetKeywordsSecurity("necessitatibus") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.keywordPagedCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateKeyword

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates keywords using a campaign ID and keyword ID for an existing PLA campaign.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKeywordRequest;
import org.openapis.openapi.models.operations.UpdateKeywordResponse;
import org.openapis.openapi.models.operations.UpdateKeywordSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.UpdateKeywordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateKeywordRequest req = new UpdateKeywordRequest(                new UpdateKeywordRequest() {{
                                bid = new Amount() {{
                                    currency = "ipsum";
                                    value = "ea";
                                }};;
                                keywordStatus = "occaecati";
                            }};, "quos", "voluptatibus");            

            UpdateKeywordResponse res = sdk.keyword.updateKeyword(req, new UpdateKeywordSecurity("tempora") {{
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
