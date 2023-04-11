import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2SearchDestinyPlayerByBungieNameRequest extends SpeakeasyBase {
    /**
     * A valid non-BungieNet membership type, or All. Indicates which memberships to return. You probably want this set to All.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2SearchDestinyPlayerByBungieName200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.UserUserInfoCard[];
    throttleSeconds?: number;
}
export declare class Destiny2SearchDestinyPlayerByBungieNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
