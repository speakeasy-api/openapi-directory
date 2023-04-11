import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetPostGameCarnageReportRequest extends SpeakeasyBase {
    /**
     * The ID of the activity whose PGCR is requested.
     */
    activityId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2GetPostGameCarnageReport200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.DestinyHistoricalStatsDestinyPostGameCarnageReportData;
    throttleSeconds?: number;
}
export declare class Destiny2GetPostGameCarnageReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
