import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionAccountGroupRolesCreatePathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class PrivateInstitutionAccountGroupRolesCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionAccountGroupRolesCreateRequest extends SpeakeasyBase {
    pathParams: PrivateInstitutionAccountGroupRolesCreatePathParams;
    request: Record<string, any>;
    security: PrivateInstitutionAccountGroupRolesCreateSecurity;
}
export declare class PrivateInstitutionAccountGroupRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
