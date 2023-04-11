import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FireteamGetClanFireteamSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class FireteamGetClanFireteamRequest extends SpeakeasyBase {
    /**
     * The unique id of the fireteam.
     */
    fireteamId: number;
    /**
     * The group id of the clan.
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class FireteamGetClanFireteam200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.FireteamFireteamResponse;
    throttleSeconds?: number;
}
export declare class FireteamGetClanFireteamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
