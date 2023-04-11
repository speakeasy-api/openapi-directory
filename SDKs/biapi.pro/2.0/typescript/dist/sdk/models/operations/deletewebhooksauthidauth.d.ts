import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksAuthIdAuthRequest extends SpeakeasyBase {
    expand?: string;
    idAuth: number;
}
export declare class DeleteWebhooksAuthIdAuthResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on AuthProvider resource
     */
    authProvider?: shared.AuthProvider;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
