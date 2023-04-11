import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class TokensGetBungieRewardsList200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, shared.TokensBungieRewardDisplay>;
    throttleSeconds?: number;
}
export declare class TokensGetBungieRewardsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
