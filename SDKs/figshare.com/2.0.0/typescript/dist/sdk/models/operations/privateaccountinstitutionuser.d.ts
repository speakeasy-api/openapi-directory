import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateAccountInstitutionUserSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateAccountInstitutionUserRequest extends SpeakeasyBase {
    /**
     * Account identifier the user is associated to
     */
    accountId: number;
}
export declare class PrivateAccountInstitutionUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK. User representation
     */
    user?: shared.User;
}
