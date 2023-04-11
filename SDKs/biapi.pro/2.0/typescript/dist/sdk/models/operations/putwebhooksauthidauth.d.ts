import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWebhooksAuthIdAuthRequestBody extends SpeakeasyBase {
    /**
     * The authentication process configuration. A dict containt either the certificate
     */
    config?: string;
    /**
     * The name of the authentication process to differentiate
     */
    name: string;
    /**
     * The type of the authentication process (oauth, certificate, token, etc...)
     */
    type: number;
}
export declare class PutWebhooksAuthIdAuthRequest extends SpeakeasyBase {
    requestBody: PutWebhooksAuthIdAuthRequestBody;
    expand?: string;
    idAuth: number;
}
export declare class PutWebhooksAuthIdAuthResponse extends SpeakeasyBase {
    /**
     * Successful PUT on AuthProvider resource
     */
    authProvider?: shared.AuthProvider;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
