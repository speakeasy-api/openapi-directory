# Campaign

### Available Operations

* [CloneCampaign](#clonecampaign) - This method clones (makes a copy of) the specified campaign's <b>campaign criterion</b>. The <b>campaign criterion</b> is a container for the fields that define the criteria for a rule-based campaign.<p>To clone a campaign, supply the <b>campaign_id</b> as a path parameter in your call. There is no request payload.</p>  <p>The ID of the newly-cloned campaign is returned in the <b>Location</b> response header.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's current campaign IDs.</p>  <p><b>Requirement: </b>In order to clone a campaign, the <b>campaignStatus</b> must be <code>ENDED</code> and the campaign must define a set of selection rules (it must be a rules-based campaign).</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
* [CreateCampaign](#createcampaign) - This method creates a Promoted Listings ad campaign. <p>A Promoted Listings <i>campaign</i> is the structure into which you place the ads or ad group for the listings you want to promote.</p>  <p>Identify the items you want to place into a campaign either by "key" or by "rule" as follows:</p> <ul><li><b>Rules-based campaigns</b> &ndash; A rules-based campaign adds items to the campaign according to the <i>criteria</i> you specify in your call to <b>createCampaign</b>. You can set the <b>autoSelectFutureInventory</b> request field to <code>true</code> so that after your campaign launches, eBay will regularly assess your new, revised, or newly-eligible listings to determine whether any should be added or removed from your campaign according to the rules you set. If there are, eBay will add or remove them automatically on a daily basis.</li> <li><b>Key-based campaigns</b> &ndash; Add items to an existing campaign using either listing ID values or Inventory Reference values: <ul><li>Add <b>listingId</b> values to an existing campaign by calling either <b>createAdByListingID</b> or <b>bulkCreateAdsByListingId</b>.</li>  <li>Add <b>inventoryReference</b> values to an existing campaign by calling either <b>createAdByInventoryReference</b> or <b>bulkCreateAdsByInventoryReference</b>.</li><li>Add an <b>ad group</b> to an existing campaign by calling <b>createAdGroup</b>.</li></ul><p class="tablenote"><b>Note:</b> No matter how you add items to a Promoted Listings campaign, each campaign can contain ads for a maximum of 50,000 items. <br><br>If a rules-based campaign identifies more than 50,000 items, ads are created for only the first 50,000 items identified by the specified criteria, and ads are not created for the remaining items.</p>  <p><b>Creating a campaign</b></p> <p>To create a basic campaign, supply:</p>  <ul><li>The user-defined campaign name</li> <li>The start date (and optionally the end date) of the campaign</li> <li>The eBay marketplace on which the campaign is hosted</li> <li>Details on the campaign funding model</li></ul>  <p>The campaign funding model specifies how the Promoted Listings fee is calculated. Currently, the supported funding models are <code>COST_PER_SALE</code> and <code>COST_PER_CLICK</code>. For complete information on how the fee is calculated and when it applies, see <a href="/api-docs/sell/static/marketing/pl-overview.html#pl-fees">Promoted Listings fees</a>.</p>   <p>If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, campaign "ads" are created by "rule" for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.</p>  <p>For details on creating Promoted Listings campaigns and how to select the items to be included in your campaigns, see <a href="/api-docs/sell/static/marketing/pl-create-campaign.html">Promoted Listings campaign creation</a>.</p>  <p>For recommendations on which listings are prime for a Promoted Listings ad campaign and to get guidance on how to set the <b>bidPercentage</b> field, see <a href="/api-docs/sell/static/marketing/pl-reco-api.html">Using the Recommendation API to help configure campaigns</a>.</p>  <p class="tablenote"><b>Tip:</b> See <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings requirements and restrictions</a> for the details on the marketplaces that support Promoted Listings via the API. See <a href="/api-docs/sell/static/marketing/pl-restrictions">Promoted Listings restrictions</a> for details about campaign limitations and restrictions.</p>
* [DeleteCampaign](#deletecampaign) - This method deletes the campaign specified by the <code>campaign_id</code> query parameter.<br /><br /><span class="tablenote"><b>Note: </b> You can only delete campaigns that have ended.</span><br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.
* [EndCampaign](#endcampaign) - This method ends an active (<code>RUNNING</code>) or paused campaign. Specify the campaign you want to end by supplying its campaign ID in a query parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>
* [FindCampaignByAdReference](#findcampaignbyadreference) - This method retrieves the campaigns containing the listing that is specified using either a listing ID, or an inventory reference ID and inventory reference type pair. The request accepts either a <b>listing_id</b>, <i>or</i> an <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pair, as used in the Inventory API.<br /><br />eBay <i>listing IDs</i> are generated by either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a> when you create a listing.<br /><br />An <i>inventory reference ID</i> can be either a seller-defined <b>SKU</b> or <b>inventoryItemGroupKey</b>, as specified in the Inventory API.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
* [GetCampaign](#getcampaign) - This method retrieves the details of a single campaign, as specified with the <b>campaign_id</b> query parameter.  <p>This method returns all the details of a campaign (including the campaign's the selection rules), except the for the listing IDs or inventory reference IDs included in the campaign. These IDs are returned by <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a>.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign IDs.</p>
* [GetCampaignByName](#getcampaignbyname) - This method retrieves the details of a single campaign, as specified with the <b>campaign_name</b> query parameter. Note that the campaign name you specify must be an exact, case-sensitive match of the name of the campaign you want to retrieve.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign names.</p>
* [GetCampaigns](#getcampaigns) - This method retrieves the details for all of the seller's defined campaigns. Request parameters can be used to retrieve a specific campaign, such as the campaign's name, the start and end date, the status, and the funding model (Cost Per Sale (CPS) or Cost Per Click (CPC). <p>You can filter the result set by a campaign name, end date range, start date range, or campaign status. You can also paginate the records returned from the result set using the <b>limit</b> query parameter, and control which records to return using the  <b>offset</b> parameter.</p>
* [PauseCampaign](#pausecampaign) - This method pauses an active (RUNNING) campaign.  <p>You can restart the campaign by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/resumeCampaign">resumeCampaign</a>, as long as the campaign's end date is in the future.</p>  <p><b>Note: </b> The listings associated with a paused campaign cannot be added into another campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>
* [ResumeCampaign](#resumecampaign) - This method resumes a paused campaign, as long as its end date is in the future. Supply the <b>campaign_id</b> for the campaign you want to restart as a query parameter in the request.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>
* [SuggestItems](#suggestitems) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to obtain ideas for listings, which can be targeted for Promoted Listings campaigns.
* [UpdateAdRateStrategy](#updateadratestrategy) - This method updates the ad rate strategy for an existing Promoted Listings Standard (PLS) rules-based ad campaign that uses the Cost Per Sale (CPS) funding model.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the CPS funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
* [UpdateCampaignBudget](#updatecampaignbudget) - <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the daily budget for a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />A click occurs when an eBay user finds and clicks on the seller’s listing (within the search results) after using a keyword that the seller has created for the campaign. For each ad in an ad group in the campaign, each click triggers a cost, which gets subtracted from the campaign’s daily budget. If the cost of the clicks exceeds the daily budget, the Promoted Listings campaign will be paused until the next day.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.
* [UpdateCampaignIdentification](#updatecampaignidentification) - This method can be used to change the name of a campaign, as well as modify the start or end dates. <p>Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>campaignName</b> and <b>startDate</b> in the request payload.  <p>If you want to change only the end date of the campaign, specify the current campaign name, set <b>endDate</b> as desired, and set <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current <b>endDate</b> value will be set to <code>null</code>. To preserve the currently-set end date, you must specify the value again in your request.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's campaign details, including the campaign ID, campaign name, and the start and end dates of the campaign.

## CloneCampaign

This method clones (makes a copy of) the specified campaign's <b>campaign criterion</b>. The <b>campaign criterion</b> is a container for the fields that define the criteria for a rule-based campaign.<p>To clone a campaign, supply the <b>campaign_id</b> as a path parameter in your call. There is no request payload.</p>  <p>The ID of the newly-cloned campaign is returned in the <b>Location</b> response header.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's current campaign IDs.</p>  <p><b>Requirement: </b>In order to clone a campaign, the <b>campaignStatus</b> must be <code>ENDED</code> and the campaign must define a set of selection rules (it must be a rules-based campaign).</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.CloneCampaign(ctx, operations.CloneCampaignRequest{
        CloneCampaignRequest: shared.CloneCampaignRequest{
            CampaignName: sdk.String("fugit"),
            EndDate: sdk.String("dolorum"),
            FundingStrategy: &shared.FundingStrategy{
                AdRateStrategy: sdk.String("excepturi"),
                BidPercentage: sdk.String("tempora"),
                DynamicAdRatePreferences: []shared.DynamicAdRatePreference{
                    shared.DynamicAdRatePreference{
                        AdRateAdjustmentPercent: sdk.String("tempore"),
                        AdRateCapPercent: sdk.String("labore"),
                    },
                    shared.DynamicAdRatePreference{
                        AdRateAdjustmentPercent: sdk.String("delectus"),
                        AdRateCapPercent: sdk.String("eum"),
                    },
                    shared.DynamicAdRatePreference{
                        AdRateAdjustmentPercent: sdk.String("non"),
                        AdRateCapPercent: sdk.String("eligendi"),
                    },
                },
                FundingModel: sdk.String("sint"),
            },
            StartDate: sdk.String("aliquid"),
        },
        CampaignID: "provident",
    }, operations.CloneCampaignSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneCampaign201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateCampaign

This method creates a Promoted Listings ad campaign. <p>A Promoted Listings <i>campaign</i> is the structure into which you place the ads or ad group for the listings you want to promote.</p>  <p>Identify the items you want to place into a campaign either by "key" or by "rule" as follows:</p> <ul><li><b>Rules-based campaigns</b> &ndash; A rules-based campaign adds items to the campaign according to the <i>criteria</i> you specify in your call to <b>createCampaign</b>. You can set the <b>autoSelectFutureInventory</b> request field to <code>true</code> so that after your campaign launches, eBay will regularly assess your new, revised, or newly-eligible listings to determine whether any should be added or removed from your campaign according to the rules you set. If there are, eBay will add or remove them automatically on a daily basis.</li> <li><b>Key-based campaigns</b> &ndash; Add items to an existing campaign using either listing ID values or Inventory Reference values: <ul><li>Add <b>listingId</b> values to an existing campaign by calling either <b>createAdByListingID</b> or <b>bulkCreateAdsByListingId</b>.</li>  <li>Add <b>inventoryReference</b> values to an existing campaign by calling either <b>createAdByInventoryReference</b> or <b>bulkCreateAdsByInventoryReference</b>.</li><li>Add an <b>ad group</b> to an existing campaign by calling <b>createAdGroup</b>.</li></ul><p class="tablenote"><b>Note:</b> No matter how you add items to a Promoted Listings campaign, each campaign can contain ads for a maximum of 50,000 items. <br><br>If a rules-based campaign identifies more than 50,000 items, ads are created for only the first 50,000 items identified by the specified criteria, and ads are not created for the remaining items.</p>  <p><b>Creating a campaign</b></p> <p>To create a basic campaign, supply:</p>  <ul><li>The user-defined campaign name</li> <li>The start date (and optionally the end date) of the campaign</li> <li>The eBay marketplace on which the campaign is hosted</li> <li>Details on the campaign funding model</li></ul>  <p>The campaign funding model specifies how the Promoted Listings fee is calculated. Currently, the supported funding models are <code>COST_PER_SALE</code> and <code>COST_PER_CLICK</code>. For complete information on how the fee is calculated and when it applies, see <a href="/api-docs/sell/static/marketing/pl-overview.html#pl-fees">Promoted Listings fees</a>.</p>   <p>If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, campaign "ads" are created by "rule" for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.</p>  <p>For details on creating Promoted Listings campaigns and how to select the items to be included in your campaigns, see <a href="/api-docs/sell/static/marketing/pl-create-campaign.html">Promoted Listings campaign creation</a>.</p>  <p>For recommendations on which listings are prime for a Promoted Listings ad campaign and to get guidance on how to set the <b>bidPercentage</b> field, see <a href="/api-docs/sell/static/marketing/pl-reco-api.html">Using the Recommendation API to help configure campaigns</a>.</p>  <p class="tablenote"><b>Tip:</b> See <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings requirements and restrictions</a> for the details on the marketplaces that support Promoted Listings via the API. See <a href="/api-docs/sell/static/marketing/pl-restrictions">Promoted Listings restrictions</a> for details about campaign limitations and restrictions.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.CreateCampaign(ctx, shared.CreateCampaignRequest{
        Budget: &shared.CampaignBudgetRequest{
            Daily: &shared.BudgetRequest{
                Amount: &shared.Amount{
                    Currency: sdk.String("necessitatibus"),
                    Value: sdk.String("sint"),
                },
            },
        },
        CampaignCriterion: &shared.CampaignCriterion{
            AutoSelectFutureInventory: sdk.Bool(false),
            CriterionType: sdk.String("officia"),
            SelectionRules: []shared.SelectionRule{
                shared.SelectionRule{
                    Brands: []string{
                        "a",
                        "dolorum",
                        "in",
                        "in",
                    },
                    CategoryIds: []string{
                        "maiores",
                        "rerum",
                        "dicta",
                        "magnam",
                    },
                    CategoryScope: sdk.String("cumque"),
                    ListingConditionIds: []string{
                        "ea",
                        "aliquid",
                        "laborum",
                        "accusamus",
                    },
                    MaxPrice: &shared.Amount{
                        Currency: sdk.String("non"),
                        Value: sdk.String("occaecati"),
                    },
                    MinPrice: &shared.Amount{
                        Currency: sdk.String("enim"),
                        Value: sdk.String("accusamus"),
                    },
                },
            },
        },
        CampaignName: sdk.String("delectus"),
        EndDate: sdk.String("quidem"),
        FundingStrategy: &shared.FundingStrategy{
            AdRateStrategy: sdk.String("provident"),
            BidPercentage: sdk.String("nam"),
            DynamicAdRatePreferences: []shared.DynamicAdRatePreference{
                shared.DynamicAdRatePreference{
                    AdRateAdjustmentPercent: sdk.String("blanditiis"),
                    AdRateCapPercent: sdk.String("deleniti"),
                },
                shared.DynamicAdRatePreference{
                    AdRateAdjustmentPercent: sdk.String("sapiente"),
                    AdRateCapPercent: sdk.String("amet"),
                },
                shared.DynamicAdRatePreference{
                    AdRateAdjustmentPercent: sdk.String("deserunt"),
                    AdRateCapPercent: sdk.String("nisi"),
                },
            },
            FundingModel: sdk.String("vel"),
        },
        MarketplaceID: sdk.String("natus"),
        StartDate: sdk.String("omnis"),
    }, operations.CreateCampaignSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCampaign201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteCampaign

This method deletes the campaign specified by the <code>campaign_id</code> query parameter.<br /><br /><span class="tablenote"><b>Note: </b> You can only delete campaigns that have ended.</span><br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.DeleteCampaign(ctx, operations.DeleteCampaignRequest{
        CampaignID: "molestiae",
    }, operations.DeleteCampaignSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EndCampaign

This method ends an active (<code>RUNNING</code>) or paused campaign. Specify the campaign you want to end by supplying its campaign ID in a query parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.EndCampaign(ctx, operations.EndCampaignRequest{
        CampaignID: "perferendis",
    }, operations.EndCampaignSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindCampaignByAdReference

This method retrieves the campaigns containing the listing that is specified using either a listing ID, or an inventory reference ID and inventory reference type pair. The request accepts either a <b>listing_id</b>, <i>or</i> an <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pair, as used in the Inventory API.<br /><br />eBay <i>listing IDs</i> are generated by either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a> when you create a listing.<br /><br />An <i>inventory reference ID</i> can be either a seller-defined <b>SKU</b> or <b>inventoryItemGroupKey</b>, as specified in the Inventory API.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.FindCampaignByAdReference(ctx, operations.FindCampaignByAdReferenceRequest{
        InventoryReferenceID: sdk.String("nihil"),
        InventoryReferenceType: sdk.String("magnam"),
        ListingID: sdk.String("distinctio"),
    }, operations.FindCampaignByAdReferenceSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaigns != nil {
        // handle response
    }
}
```

## GetCampaign

This method retrieves the details of a single campaign, as specified with the <b>campaign_id</b> query parameter.  <p>This method returns all the details of a campaign (including the campaign's the selection rules), except the for the listing IDs or inventory reference IDs included in the campaign. These IDs are returned by <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a>.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign IDs.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.GetCampaign(ctx, operations.GetCampaignRequest{
        CampaignID: "id",
    }, operations.GetCampaignSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## GetCampaignByName

This method retrieves the details of a single campaign, as specified with the <b>campaign_name</b> query parameter. Note that the campaign name you specify must be an exact, case-sensitive match of the name of the campaign you want to retrieve.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign names.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.GetCampaignByName(ctx, operations.GetCampaignByNameRequest{
        CampaignName: "labore",
    }, operations.GetCampaignByNameSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## GetCampaigns

This method retrieves the details for all of the seller's defined campaigns. Request parameters can be used to retrieve a specific campaign, such as the campaign's name, the start and end date, the status, and the funding model (Cost Per Sale (CPS) or Cost Per Click (CPC). <p>You can filter the result set by a campaign name, end date range, start date range, or campaign status. You can also paginate the records returned from the result set using the <b>limit</b> query parameter, and control which records to return using the  <b>offset</b> parameter.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.GetCampaigns(ctx, operations.GetCampaignsRequest{
        CampaignName: sdk.String("labore"),
        CampaignStatus: sdk.String("suscipit"),
        EndDateRange: sdk.String("natus"),
        FundingStrategy: sdk.String("nobis"),
        Limit: sdk.String("eum"),
        Offset: sdk.String("vero"),
        StartDateRange: sdk.String("aspernatur"),
    }, operations.GetCampaignsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignPagedCollectionResponse != nil {
        // handle response
    }
}
```

## PauseCampaign

This method pauses an active (RUNNING) campaign.  <p>You can restart the campaign by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/resumeCampaign">resumeCampaign</a>, as long as the campaign's end date is in the future.</p>  <p><b>Note: </b> The listings associated with a paused campaign cannot be added into another campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.PauseCampaign(ctx, operations.PauseCampaignRequest{
        CampaignID: "architecto",
    }, operations.PauseCampaignSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResumeCampaign

This method resumes a paused campaign, as long as its end date is in the future. Supply the <b>campaign_id</b> for the campaign you want to restart as a query parameter in the request.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.ResumeCampaign(ctx, operations.ResumeCampaignRequest{
        CampaignID: "magnam",
    }, operations.ResumeCampaignSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SuggestItems

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to obtain ideas for listings, which can be targeted for Promoted Listings campaigns.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.SuggestItems(ctx, operations.SuggestItemsRequest{
        CampaignID: "et",
        CategoryIds: sdk.String("excepturi"),
        Limit: sdk.String("ullam"),
        Offset: sdk.String("provident"),
    }, operations.SuggestItemsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetedAdsPagedCollection != nil {
        // handle response
    }
}
```

## UpdateAdRateStrategy

This method updates the ad rate strategy for an existing Promoted Listings Standard (PLS) rules-based ad campaign that uses the Cost Per Sale (CPS) funding model.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the CPS funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.UpdateAdRateStrategy(ctx, operations.UpdateAdRateStrategyRequest{
        UpdateAdrateStrategyRequest: shared.UpdateAdrateStrategyRequest{
            AdRateStrategy: sdk.String("quos"),
            BidPercentage: sdk.String("sint"),
            DynamicAdRatePreferences: []shared.DynamicAdRatePreference{
                shared.DynamicAdRatePreference{
                    AdRateAdjustmentPercent: sdk.String("mollitia"),
                    AdRateCapPercent: sdk.String("reiciendis"),
                },
            },
        },
        CampaignID: "mollitia",
    }, operations.UpdateAdRateStrategySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCampaignBudget

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the daily budget for a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />A click occurs when an eBay user finds and clicks on the seller’s listing (within the search results) after using a keyword that the seller has created for the campaign. For each ad in an ad group in the campaign, each click triggers a cost, which gets subtracted from the campaign’s daily budget. If the cost of the clicks exceeds the daily budget, the Promoted Listings campaign will be paused until the next day.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.UpdateCampaignBudget(ctx, operations.UpdateCampaignBudgetRequest{
        UpdateCampaignBudgetRequest: shared.UpdateCampaignBudgetRequest{
            Daily: &shared.BudgetRequest{
                Amount: &shared.Amount{
                    Currency: sdk.String("ad"),
                    Value: sdk.String("eum"),
                },
            },
        },
        CampaignID: "dolor",
    }, operations.UpdateCampaignBudgetSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCampaignIdentification

This method can be used to change the name of a campaign, as well as modify the start or end dates. <p>Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>campaignName</b> and <b>startDate</b> in the request payload.  <p>If you want to change only the end date of the campaign, specify the current campaign name, set <b>endDate</b> as desired, and set <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current <b>endDate</b> value will be set to <code>null</code>. To preserve the currently-set end date, you must specify the value again in your request.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's campaign details, including the campaign ID, campaign name, and the start and end dates of the campaign.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.UpdateCampaignIdentification(ctx, operations.UpdateCampaignIdentificationRequest{
        UpdateCampaignIdentificationRequest: shared.UpdateCampaignIdentificationRequest{
            CampaignName: sdk.String("necessitatibus"),
            EndDate: sdk.String("odit"),
            StartDate: sdk.String("nemo"),
        },
        CampaignID: "quasi",
    }, operations.UpdateCampaignIdentificationSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
