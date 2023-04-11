import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConsentFormsUnapplyFromAppointmentSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ConsentFormsUnapplyFromAppointmentRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ConsentFormsUnapplyFromAppointmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
