import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionAccountGroupRolesPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class PrivateInstitutionAccountGroupRolesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionAccountGroupRolesRequest extends SpeakeasyBase {
    pathParams: PrivateInstitutionAccountGroupRolesPathParams;
    security: PrivateInstitutionAccountGroupRolesSecurity;
}
export declare class PrivateInstitutionAccountGroupRolesResponse extends SpeakeasyBase {
    accountGroupRoles?: Record<string, any>;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
