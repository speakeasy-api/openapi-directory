import { SpeakeasyBase } from "../../../internal/utils";
import { FailedCampaignStateResponse } from "./failedcampaignstateresponse";
import { SuccessfulCampaignStateResponse } from "./successfulcampaignstateresponse";
/**
 * GetCampaignStateBatchResponse
 */
export declare class GetCampaignStateBatchResponse extends SpeakeasyBase {
    /**
     * List of failed requests of campaign state
     */
    failedRequests?: FailedCampaignStateResponse[];
    /**
     * List of successful response of campaign state
     */
    successfulRequests?: SuccessfulCampaignStateResponse[];
}
