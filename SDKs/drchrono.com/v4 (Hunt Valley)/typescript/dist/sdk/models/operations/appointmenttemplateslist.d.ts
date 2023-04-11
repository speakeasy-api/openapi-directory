import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentTemplatesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentTemplatesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    profile?: number;
}
/**
 * Paginated Result
 */
export declare class AppointmentTemplatesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.AppointmentTemplate[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class AppointmentTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    appointmentTemplatesList200ApplicationJSONObject?: AppointmentTemplatesList200ApplicationJSON;
}
