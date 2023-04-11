import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionAccountsSearchSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateInstitutionAccountsSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of Accounts
     */
    shortAccounts?: shared.ShortAccount[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
