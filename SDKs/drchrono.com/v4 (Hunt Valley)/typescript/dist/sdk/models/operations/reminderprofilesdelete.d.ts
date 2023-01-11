import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReminderProfilesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ReminderProfilesDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ReminderProfilesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ReminderProfilesDeleteRequest extends SpeakeasyBase {
    pathParams: ReminderProfilesDeletePathParams;
    queryParams: ReminderProfilesDeleteQueryParams;
    security: ReminderProfilesDeleteSecurity;
}
export declare class ReminderProfilesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
