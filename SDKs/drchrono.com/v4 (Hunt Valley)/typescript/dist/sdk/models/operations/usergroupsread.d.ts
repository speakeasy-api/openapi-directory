import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserGroupsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UserGroupsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class UserGroupsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class UserGroupsReadRequest extends SpeakeasyBase {
    pathParams: UserGroupsReadPathParams;
    queryParams: UserGroupsReadQueryParams;
    security: UserGroupsReadSecurity;
}
export declare class UserGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userProfilesGroup?: shared.UserProfilesGroup;
}
