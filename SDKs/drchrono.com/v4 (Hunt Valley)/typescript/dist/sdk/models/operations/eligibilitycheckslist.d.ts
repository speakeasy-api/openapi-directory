import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EligibilityChecksListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class EligibilityChecksListRequest extends SpeakeasyBase {
    appointment?: number;
    appointmentDate?: string;
    appointmentDateRange?: string;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    queryDate?: string;
    queryDateRange?: string;
}
/**
 * Paginated Result
 */
export declare class EligibilityChecksList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.Coverage[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class EligibilityChecksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eligibilityChecksList200ApplicationJSONObject?: EligibilityChecksList200ApplicationJSON;
}
