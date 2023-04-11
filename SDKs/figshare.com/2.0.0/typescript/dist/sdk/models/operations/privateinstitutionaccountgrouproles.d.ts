import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionAccountGroupRolesSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateInstitutionAccountGroupRolesRequest extends SpeakeasyBase {
    /**
     * Account identifier the user is associated to
     */
    accountId: number;
}
export declare class PrivateInstitutionAccountGroupRolesResponse extends SpeakeasyBase {
    /**
     * OK. Account Group Roles
     */
    accountGroupRoles?: Record<string, any>;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
