import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksAuthRequestBody extends SpeakeasyBase {
    /**
     * The authentication process configuration. A dict contains either the certificate
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
export declare class PostWebhooksAuthRequest extends SpeakeasyBase {
    requestBody: PostWebhooksAuthRequestBody;
    expand?: string;
}
export declare class PostWebhooksAuthResponse extends SpeakeasyBase {
    /**
     * Successful POST on AuthProvider resource
     */
    authProvider?: shared.AuthProvider;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
