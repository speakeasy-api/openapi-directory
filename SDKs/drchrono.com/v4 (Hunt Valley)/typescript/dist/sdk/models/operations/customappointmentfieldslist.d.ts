import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomAppointmentFieldsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomAppointmentFieldsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class CustomAppointmentFieldsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CustomAppointmentFieldType[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class CustomAppointmentFieldsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    customAppointmentFieldsList200ApplicationJSONObject?: CustomAppointmentFieldsList200ApplicationJSON;
}
