import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReminderProfilesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ReminderProfilesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ReminderProfilesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ReminderProfilesReadRequest extends SpeakeasyBase {
    pathParams: ReminderProfilesReadPathParams;
    queryParams: ReminderProfilesReadQueryParams;
    security: ReminderProfilesReadSecurity;
}
export declare class ReminderProfilesReadResponse extends SpeakeasyBase {
    contentType: string;
    reminderProfile?: shared.ReminderProfile;
    statusCode: number;
}
