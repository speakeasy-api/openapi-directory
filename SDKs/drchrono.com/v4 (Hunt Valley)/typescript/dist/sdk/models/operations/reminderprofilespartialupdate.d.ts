import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReminderProfilesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ReminderProfilesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ReminderProfilesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ReminderProfilesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ReminderProfilesPartialUpdatePathParams;
    queryParams: ReminderProfilesPartialUpdateQueryParams;
    security: ReminderProfilesPartialUpdateSecurity;
}
export declare class ReminderProfilesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
