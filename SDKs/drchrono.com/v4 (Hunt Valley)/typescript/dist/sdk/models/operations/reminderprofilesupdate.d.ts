import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReminderProfilesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ReminderProfilesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ReminderProfilesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ReminderProfilesUpdateRequest extends SpeakeasyBase {
    pathParams: ReminderProfilesUpdatePathParams;
    queryParams: ReminderProfilesUpdateQueryParams;
    security: ReminderProfilesUpdateSecurity;
}
export declare class ReminderProfilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
