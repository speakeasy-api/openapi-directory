import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveOAuthAuthorizationsRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * OAuth client ID
     */
    clientId: string;
}
export declare class RemoveOAuthAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
