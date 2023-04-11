import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksAuthRequest extends SpeakeasyBase {
    expand?: string;
}
export declare class DeleteWebhooksAuthResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on AuthProvider resource
     */
    authProvider?: shared.AuthProvider;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
