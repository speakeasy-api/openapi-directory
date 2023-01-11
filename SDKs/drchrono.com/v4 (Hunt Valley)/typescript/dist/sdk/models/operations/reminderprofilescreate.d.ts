import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReminderProfilesCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ReminderProfilesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ReminderProfilesCreateRequest extends SpeakeasyBase {
    queryParams: ReminderProfilesCreateQueryParams;
    security: ReminderProfilesCreateSecurity;
}
export declare class ReminderProfilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    reminderProfile?: shared.ReminderProfile;
    statusCode: number;
}
