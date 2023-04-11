import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionAccountsUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateInstitutionAccountsUpdateRequest extends SpeakeasyBase {
    /**
     * Account description
     */
    accountUpdate: shared.AccountUpdate;
    /**
     * Account identifier the user is associated to
     */
    accountId: number;
}
export declare class PrivateInstitutionAccountsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
