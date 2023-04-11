import { SpeakeasyBase } from "../../../internal/utils";
import { GetCampaignStateBatchFailureCodeEnum } from "./getcampaignstatebatchfailurecodeenum";
/**
 * Failed response of campaign state
 */
export declare class FailedCampaignStateResponse extends SpeakeasyBase {
    /**
     * Identifier representing a Campaign
     */
    campaignId?: string;
    /**
     * A predefined code indicating the error that caused the failure in getting state of campaigns
     */
    failureCode?: GetCampaignStateBatchFailureCodeEnum;
}
