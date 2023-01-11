import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionAccountsUpdatePathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class PrivateInstitutionAccountsUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionAccountsUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateInstitutionAccountsUpdatePathParams;
    request: shared.AccountUpdate;
    security: PrivateInstitutionAccountsUpdateSecurity;
}
export declare class PrivateInstitutionAccountsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
