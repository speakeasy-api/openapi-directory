import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionAccountGroupRoleDeletePathParams extends SpeakeasyBase {
    accountId: number;
    groupId: number;
    roleId: number;
}
export declare class PrivateInstitutionAccountGroupRoleDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionAccountGroupRoleDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateInstitutionAccountGroupRoleDeletePathParams;
    security: PrivateInstitutionAccountGroupRoleDeleteSecurity;
}
export declare class PrivateInstitutionAccountGroupRoleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
