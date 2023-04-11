import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsRevokeAuthorizationForApplicationRequest extends SpeakeasyBase {
    accessToken: string;
    /**
     * The client ID of your GitHub app.
     */
    clientId: string;
}
export declare class OauthAuthorizationsRevokeAuthorizationForApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
