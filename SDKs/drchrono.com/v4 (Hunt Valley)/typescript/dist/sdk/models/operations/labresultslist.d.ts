import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabResultsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabResultsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    order?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class LabResultsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.LabResult[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class LabResultsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    labResultsList200ApplicationJSONObject?: LabResultsList200ApplicationJSON;
}
