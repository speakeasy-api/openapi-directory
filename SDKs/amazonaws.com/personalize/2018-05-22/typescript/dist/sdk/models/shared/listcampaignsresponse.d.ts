import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignSummary } from "./campaignsummary";
/**
 * Success
 */
export declare class ListCampaignsResponse extends SpeakeasyBase {
    campaigns?: CampaignSummary[];
    nextToken?: string;
}
