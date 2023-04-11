import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionAccountGroupRolesCreateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateInstitutionAccountGroupRolesCreateRequest extends SpeakeasyBase {
    /**
     * Account description
     */
    requestBody: Record<string, any>;
    /**
     * Account identifier the user is associated to
     */
    accountId: number;
}
export declare class PrivateInstitutionAccountGroupRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
