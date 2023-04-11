import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentProfilesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentProfilesUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class AppointmentProfilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
