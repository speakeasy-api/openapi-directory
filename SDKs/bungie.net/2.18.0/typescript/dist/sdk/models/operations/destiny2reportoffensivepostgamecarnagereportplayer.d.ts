import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayerRequest extends SpeakeasyBase {
    /**
     * The ID of the activity where you ran into the brigand that you're reporting.
     */
    activityId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayer200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: number;
    throttleSeconds?: number;
}
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
