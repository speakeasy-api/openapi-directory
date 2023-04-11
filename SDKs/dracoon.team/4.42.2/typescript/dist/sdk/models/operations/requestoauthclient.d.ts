import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestOAuthClientRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * OAuth client ID
     */
    clientId: string;
}
export declare class RequestOAuthClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
