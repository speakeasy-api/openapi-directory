import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignStateEnum } from "./campaignstateenum";
/**
 * Successful response of campaign state
 */
export declare class SuccessfulCampaignStateResponse extends SpeakeasyBase {
    /**
     * Identifier representing a Campaign
     */
    campaignId?: string;
    /**
     * State of a campaign
     */
    state?: CampaignStateEnum;
}
