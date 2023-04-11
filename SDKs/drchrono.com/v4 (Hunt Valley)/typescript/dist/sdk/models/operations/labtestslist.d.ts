import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabTestsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabTestsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    order?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class LabTestsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.LabTest[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class LabTestsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    labTestsList200ApplicationJSONObject?: LabTestsList200ApplicationJSON;
}
