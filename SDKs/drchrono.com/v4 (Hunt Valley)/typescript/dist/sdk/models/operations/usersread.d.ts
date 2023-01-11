import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UsersReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class UsersReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class UsersReadRequest extends SpeakeasyBase {
    pathParams: UsersReadPathParams;
    queryParams: UsersReadQueryParams;
    security: UsersReadSecurity;
}
export declare class UsersReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userProfile?: shared.UserProfile;
}
