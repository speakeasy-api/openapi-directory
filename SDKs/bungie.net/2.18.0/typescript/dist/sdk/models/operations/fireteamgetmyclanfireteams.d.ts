import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FireteamGetMyClanFireteamsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class FireteamGetMyClanFireteamsRequest extends SpeakeasyBase {
    /**
     * If true, filter by clan. Otherwise, ignore the clan and show all of the user's fireteams.
     */
    groupFilter?: boolean;
    /**
     * The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).
     */
    groupId: number;
    /**
     * If true, return fireteams that have been closed.
     */
    includeClosed: boolean;
    /**
     * An optional language filter.
     */
    langFilter?: string;
    /**
     * Deprecated parameter, ignored.
     */
    page: number;
    /**
     * The platform filter.
     */
    platform: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class FireteamGetMyClanFireteams200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfFireteamResponse;
    throttleSeconds?: number;
}
export declare class FireteamGetMyClanFireteamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
