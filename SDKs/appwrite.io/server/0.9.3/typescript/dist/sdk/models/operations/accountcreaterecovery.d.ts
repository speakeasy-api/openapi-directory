import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountCreateRecoverySecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountCreateRecoveryRequestBody extends SpeakeasyBase {
    /**
     * User email.
     */
    email: string;
    /**
     * URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     */
    url: string;
}
export declare class AccountCreateRecoveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token
     */
    token?: shared.Token;
}
