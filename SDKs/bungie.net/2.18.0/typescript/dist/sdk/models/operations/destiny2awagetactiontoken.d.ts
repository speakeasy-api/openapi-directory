import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2AwaGetActionTokenSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class Destiny2AwaGetActionTokenRequest extends SpeakeasyBase {
    /**
     * The identifier for the advanced write action request.
     */
    correlationId: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2AwaGetActionToken200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.DestinyAdvancedAwaAuthorizationResult;
    throttleSeconds?: number;
}
export declare class Destiny2AwaGetActionTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
