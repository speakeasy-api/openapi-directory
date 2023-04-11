import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TokensGetPartnerOfferSkuHistorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class TokensGetPartnerOfferSkuHistoryRequest extends SpeakeasyBase {
    /**
     * The partner application identifier.
     */
    partnerApplicationId: number;
    /**
     * The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
     */
    targetBnetMembershipId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class TokensGetPartnerOfferSkuHistory200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.TokensPartnerOfferSkuHistoryResponse[];
    throttleSeconds?: number;
}
export declare class TokensGetPartnerOfferSkuHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
