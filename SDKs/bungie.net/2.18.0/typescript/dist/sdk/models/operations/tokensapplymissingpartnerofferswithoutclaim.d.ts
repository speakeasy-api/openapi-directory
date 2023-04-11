import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TokensApplyMissingPartnerOffersWithoutClaimSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class TokensApplyMissingPartnerOffersWithoutClaimRequest extends SpeakeasyBase {
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
export declare class TokensApplyMissingPartnerOffersWithoutClaim200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class TokensApplyMissingPartnerOffersWithoutClaimResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
