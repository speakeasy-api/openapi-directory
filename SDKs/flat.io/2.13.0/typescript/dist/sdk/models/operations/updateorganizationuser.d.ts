import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateOrganizationUserPathParams extends SpeakeasyBase {
    user: string;
}
export declare class UpdateOrganizationUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateOrganizationUserRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationUserPathParams;
    request: shared.UserAdminUpdate;
    security: UpdateOrganizationUserSecurity;
}
export declare class UpdateOrganizationUserResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    userDetailsAdmin?: shared.UserDetailsAdmin;
}
