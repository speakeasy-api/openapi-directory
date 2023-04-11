import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReminderProfilesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ReminderProfilesCreateRequest extends SpeakeasyBase {
    doctor?: number;
}
export declare class ReminderProfilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    reminderProfile?: shared.ReminderProfile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
