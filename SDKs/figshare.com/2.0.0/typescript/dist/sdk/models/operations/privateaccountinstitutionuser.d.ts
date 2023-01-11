import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateAccountInstitutionUserPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class PrivateAccountInstitutionUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateAccountInstitutionUserRequest extends SpeakeasyBase {
    pathParams: PrivateAccountInstitutionUserPathParams;
    security: PrivateAccountInstitutionUserSecurity;
}
export declare class PrivateAccountInstitutionUserResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    user?: shared.User;
}
