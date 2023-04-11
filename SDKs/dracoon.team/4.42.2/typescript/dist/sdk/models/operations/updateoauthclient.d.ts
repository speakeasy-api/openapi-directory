import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateOAuthClientRequest extends SpeakeasyBase {
    updateOAuthClientRequest: shared.UpdateOAuthClientRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * OAuth client ID
     */
    clientId: string;
}
export declare class UpdateOAuthClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    updateOAuthClient400ApplicationJSONOneOf?: any;
}
