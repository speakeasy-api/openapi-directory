import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentProfilesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentProfilesPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class AppointmentProfilesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
