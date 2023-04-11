import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReminderProfilesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ReminderProfilesDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ReminderProfilesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
