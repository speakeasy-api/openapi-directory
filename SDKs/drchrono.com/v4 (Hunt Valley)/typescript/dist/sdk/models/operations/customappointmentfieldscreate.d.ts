import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomAppointmentFieldsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomAppointmentFieldsCreateRequest extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomAppointmentFieldsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    customAppointmentFieldType?: shared.CustomAppointmentFieldType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
