import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionAccountGroupRoleDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateInstitutionAccountGroupRoleDeleteRequest extends SpeakeasyBase {
    /**
     * Account identifier for which to remove the role
     */
    accountId: number;
    /**
     * Group identifier for which to remove the role
     */
    groupId: number;
    /**
     * Role identifier
     */
    roleId: number;
}
export declare class PrivateInstitutionAccountGroupRoleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
