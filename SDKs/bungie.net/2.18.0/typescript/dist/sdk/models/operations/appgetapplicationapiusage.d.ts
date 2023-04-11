import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppGetApplicationApiUsageSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AppGetApplicationApiUsageRequest extends SpeakeasyBase {
    /**
     * ID of the application to get usage statistics.
     */
    applicationId: number;
    /**
     * End time for query. Goes to now if not specified.
     */
    end?: Date;
    /**
     * Start time for query. Goes to 24 hours ago if not specified.
     */
    start?: Date;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class AppGetApplicationApiUsage200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ApplicationsApiUsage;
    throttleSeconds?: number;
}
export declare class AppGetApplicationApiUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
