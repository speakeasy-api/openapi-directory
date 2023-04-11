import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConsentFormsApplyToAppointmentSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ConsentFormsApplyToAppointmentRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ConsentFormsApplyToAppointmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
