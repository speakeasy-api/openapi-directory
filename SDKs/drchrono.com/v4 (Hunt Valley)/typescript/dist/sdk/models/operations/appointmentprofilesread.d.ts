import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentProfilesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentProfilesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class AppointmentProfilesReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    appointmentProfile?: shared.AppointmentProfile;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
