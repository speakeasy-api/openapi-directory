import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CommLogsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CommLogsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class CommLogsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PhoneCallLog[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class CommLogsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    commLogsList200ApplicationJSONObject?: CommLogsList200ApplicationJSON;
}
