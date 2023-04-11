import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentProfilesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentProfilesCreateRequest extends SpeakeasyBase {
    doctor?: number;
}
export declare class AppointmentProfilesCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    appointmentProfile?: shared.AppointmentProfile;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
