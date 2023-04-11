import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DotGetGlobalAlertsRequest extends SpeakeasyBase {
    /**
     * Determines whether Streaming Alerts are included in results
     */
    includestreaming?: boolean;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class DotGetGlobalAlerts200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GlobalAlert[];
    throttleSeconds?: number;
}
export declare class DotGetGlobalAlertsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
