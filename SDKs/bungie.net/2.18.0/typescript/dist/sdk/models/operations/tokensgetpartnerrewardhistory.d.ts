import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TokensGetPartnerRewardHistorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class TokensGetPartnerRewardHistoryRequest extends SpeakeasyBase {
    /**
     * The partner application identifier.
     */
    partnerApplicationId: number;
    /**
     * The bungie.net user to return reward history for.
     */
    targetBnetMembershipId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class TokensGetPartnerRewardHistory200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.TokensPartnerRewardHistoryResponse;
    throttleSeconds?: number;
}
export declare class TokensGetPartnerRewardHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
