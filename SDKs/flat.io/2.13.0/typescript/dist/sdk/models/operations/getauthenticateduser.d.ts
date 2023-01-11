import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuthenticatedUserQueryParams extends SpeakeasyBase {
    onlyId?: boolean;
}
export declare class GetAuthenticatedUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: GetAuthenticatedUserQueryParams;
    security: GetAuthenticatedUserSecurity;
}
export declare class GetAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    userDetails?: shared.UserDetails;
}
