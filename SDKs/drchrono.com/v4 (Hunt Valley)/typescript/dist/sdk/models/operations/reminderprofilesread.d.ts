import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReminderProfilesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ReminderProfilesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ReminderProfilesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    reminderProfile?: shared.ReminderProfile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
