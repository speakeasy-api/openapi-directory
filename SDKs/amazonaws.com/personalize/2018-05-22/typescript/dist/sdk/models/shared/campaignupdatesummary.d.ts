import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";
/**
 * Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.
 */
export declare class CampaignUpdateSummary extends SpeakeasyBase {
    /**
     * The configuration details of a campaign.
     */
    campaignConfig?: CampaignConfig;
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    minProvisionedTPS?: number;
    solutionVersionArn?: string;
    status?: string;
}
