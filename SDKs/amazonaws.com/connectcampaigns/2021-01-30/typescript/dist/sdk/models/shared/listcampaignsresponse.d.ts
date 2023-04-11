import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignSummary } from "./campaignsummary";
/**
 * ListCampaignsResponse
 */
export declare class ListCampaignsResponse extends SpeakeasyBase {
    /**
     * A list of Amazon Connect campaigns.
     */
    campaignSummaryList?: CampaignSummary[];
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
}
