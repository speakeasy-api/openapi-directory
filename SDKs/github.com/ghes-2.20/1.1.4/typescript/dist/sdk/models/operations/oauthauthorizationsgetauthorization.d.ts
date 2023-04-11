import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsGetAuthorizationRequest extends SpeakeasyBase {
    /**
     * authorization_id parameter
     */
    authorizationId: number;
}
export declare class OauthAuthorizationsGetAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
