import { SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";
import { CampaignBudget } from "./campaignbudget";
import { CampaignCriterion } from "./campaigncriterion";
import { FundingStrategy } from "./fundingstrategy";
/**
 * This type defines the fields that describe an ad campaign.
 */
export declare class Campaign extends SpeakeasyBase {
    /**
     * This array contains alert messages for the campaign.
     */
    alerts?: Alert[];
    /**
     * A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign.
     */
    budget?: CampaignBudget;
    /**
     * This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.
     */
    campaignCriterion?: CampaignCriterion;
    /**
     * A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.
     */
    campaignId?: string;
    /**
     * A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters
     */
    campaignName?: string;
    /**
     * Indicates the status of the campaign, such as <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CampaignStatusEnum'>eBay API documentation</a>
     */
    campaignStatus?: string;
    /**
     * The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.
     */
    endDate?: string;
    /**
     * This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign.
     */
    fundingStrategy?: FundingStrategy;
    /**
     * The ID of the eBay marketplace where the campaign is hosted. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
     */
    marketplaceId?: string;
    /**
     * The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign">getCampaign</a> to check the status of the campaign.</p>
     */
    startDate?: string;
}
