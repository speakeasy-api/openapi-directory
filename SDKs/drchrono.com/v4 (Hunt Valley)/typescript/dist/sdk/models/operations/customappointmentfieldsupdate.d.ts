import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomAppointmentFieldsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomAppointmentFieldsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class CustomAppointmentFieldsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
