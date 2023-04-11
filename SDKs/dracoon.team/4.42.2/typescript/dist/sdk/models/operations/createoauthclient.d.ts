import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOAuthClientRequest extends SpeakeasyBase {
    createOAuthClientRequest: shared.CreateOAuthClientRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateOAuthClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    createOAuthClient400ApplicationJSONOneOf?: any;
}
