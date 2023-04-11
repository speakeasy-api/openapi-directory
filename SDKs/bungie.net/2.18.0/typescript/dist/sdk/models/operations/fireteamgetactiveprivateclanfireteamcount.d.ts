import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FireteamGetActivePrivateClanFireteamCountSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class FireteamGetActivePrivateClanFireteamCountRequest extends SpeakeasyBase {
    /**
     * The group id of the clan.
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class FireteamGetActivePrivateClanFireteamCount200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: number;
    throttleSeconds?: number;
}
export declare class FireteamGetActivePrivateClanFireteamCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
