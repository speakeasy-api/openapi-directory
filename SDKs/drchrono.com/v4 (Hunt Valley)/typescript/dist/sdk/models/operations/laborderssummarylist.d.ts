import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabOrdersSummaryListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersSummaryListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class LabOrdersSummaryList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.LabOrder[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class LabOrdersSummaryListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    labOrdersSummaryList200ApplicationJSONObject?: LabOrdersSummaryList200ApplicationJSON;
}
