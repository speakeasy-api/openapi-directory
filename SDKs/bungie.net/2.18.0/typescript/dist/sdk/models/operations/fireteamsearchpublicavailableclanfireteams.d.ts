import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FireteamSearchPublicAvailableClanFireteamsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class FireteamSearchPublicAvailableClanFireteamsRequest extends SpeakeasyBase {
    /**
     * The activity type to filter by.
     */
    activityType: number;
    /**
     * The date range to grab available fireteams.
     */
    dateRange: number;
    /**
     * If you wish the result to exclude immediate fireteams, set this to true. Immediate-only can be forced using the dateRange enum.
     */
    excludeImmediate?: boolean;
    /**
     * An optional language filter.
     */
    langFilter?: string;
    /**
     * Zero based page
     */
    page: number;
    /**
     * The platform filter.
     */
    platform: number;
    /**
     * Filters based on available slots
     */
    slotFilter: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class FireteamSearchPublicAvailableClanFireteams200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfFireteamSummary;
    throttleSeconds?: number;
}
export declare class FireteamSearchPublicAvailableClanFireteamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
