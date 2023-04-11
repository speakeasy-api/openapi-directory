import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FeeSchedulesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class FeeSchedulesListRequest extends SpeakeasyBase {
    code?: string;
    codeType?: string;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    payerId?: string;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class FeeSchedulesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.DoctorFeeSchedule[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class FeeSchedulesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    feeSchedulesList200ApplicationJSONObject?: FeeSchedulesList200ApplicationJSON;
}
