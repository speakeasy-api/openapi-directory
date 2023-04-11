import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomAppointmentFieldsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomAppointmentFieldsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class CustomAppointmentFieldsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customAppointmentFieldType?: shared.CustomAppointmentFieldType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
