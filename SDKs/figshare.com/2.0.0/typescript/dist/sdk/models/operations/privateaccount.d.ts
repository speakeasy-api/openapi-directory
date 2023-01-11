import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateAccountSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateAccountRequest extends SpeakeasyBase {
    security: PrivateAccountSecurity;
}
export declare class PrivateAccountResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
