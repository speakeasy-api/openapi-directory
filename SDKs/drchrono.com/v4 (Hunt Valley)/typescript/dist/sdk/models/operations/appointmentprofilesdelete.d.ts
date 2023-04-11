import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentProfilesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentProfilesDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class AppointmentProfilesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
