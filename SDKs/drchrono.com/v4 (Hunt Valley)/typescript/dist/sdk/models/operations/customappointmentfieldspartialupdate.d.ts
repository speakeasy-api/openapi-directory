import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomAppointmentFieldsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomAppointmentFieldsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class CustomAppointmentFieldsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
