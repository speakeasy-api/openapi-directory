import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";
import { CampaignUpdateSummary } from "./campaignupdatesummary";
/**
 * An object that describes the deployment of a solution version. For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.
 */
export declare class Campaign extends SpeakeasyBase {
    campaignArn?: string;
    campaignConfig?: CampaignConfig;
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    /**
     * Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.
     */
    latestCampaignUpdate?: CampaignUpdateSummary;
    minProvisionedTPS?: number;
    name?: string;
    solutionVersionArn?: string;
    status?: string;
}
