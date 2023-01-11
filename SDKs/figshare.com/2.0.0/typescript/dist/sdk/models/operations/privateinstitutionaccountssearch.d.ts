import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionAccountsSearchSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionAccountsSearchRequest extends SpeakeasyBase {
    request: shared.InstitutionAccountsSearch;
    security: PrivateInstitutionAccountsSearchSecurity;
}
export declare class PrivateInstitutionAccountsSearchResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    shortAccounts?: shared.ShortAccount[];
    statusCode: number;
}
