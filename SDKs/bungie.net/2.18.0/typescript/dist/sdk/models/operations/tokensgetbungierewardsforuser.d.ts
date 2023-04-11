import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TokensGetBungieRewardsForUserSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class TokensGetBungieRewardsForUserRequest extends SpeakeasyBase {
    /**
     * bungie.net user membershipId for requested user rewards. If not self, elevated permissions are required.
     */
    membershipId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class TokensGetBungieRewardsForUser200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, shared.TokensBungieRewardDisplay>;
    throttleSeconds?: number;
}
export declare class TokensGetBungieRewardsForUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
