import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TokensGetBungieRewardsForPlatformUserSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class TokensGetBungieRewardsForPlatformUserRequest extends SpeakeasyBase {
    /**
     * users platform membershipId for requested user rewards. If not self, elevated permissions are required.
     */
    membershipId: number;
    /**
     * The target Destiny 2 membership type.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class TokensGetBungieRewardsForPlatformUser200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, shared.TokensBungieRewardDisplay>;
    throttleSeconds?: number;
}
export declare class TokensGetBungieRewardsForPlatformUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
