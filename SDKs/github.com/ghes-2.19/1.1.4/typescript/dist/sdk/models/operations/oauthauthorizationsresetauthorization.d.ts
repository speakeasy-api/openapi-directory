import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsResetAuthorizationRequest extends SpeakeasyBase {
    accessToken: string;
    /**
     * The client ID of your GitHub app.
     */
    clientId: string;
}
export declare class OauthAuthorizationsResetAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorizationWithUser?: shared.AuthorizationWithUser;
}
