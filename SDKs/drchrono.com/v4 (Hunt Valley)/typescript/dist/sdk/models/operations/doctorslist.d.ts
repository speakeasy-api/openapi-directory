import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DoctorsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class DoctorsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class DoctorsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.Doctor[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class DoctorsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    doctorsList200ApplicationJSONObject?: DoctorsList200ApplicationJSON;
}
