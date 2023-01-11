import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOrganizationUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateOrganizationUserRequest extends SpeakeasyBase {
    request?: shared.UserCreation;
    security: CreateOrganizationUserSecurity;
}
export declare class CreateOrganizationUserResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    userDetailsAdmin?: shared.UserDetailsAdmin;
}
