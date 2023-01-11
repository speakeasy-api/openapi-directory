import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionAccountsCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionAccountsCreateRequest extends SpeakeasyBase {
    request: shared.AccountCreate;
    security: PrivateInstitutionAccountsCreateSecurity;
}
export declare class PrivateInstitutionAccountsCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
