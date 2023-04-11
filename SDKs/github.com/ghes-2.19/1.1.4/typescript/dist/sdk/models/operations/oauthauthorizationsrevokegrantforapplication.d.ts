import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsRevokeGrantForApplicationRequest extends SpeakeasyBase {
    accessToken: string;
    /**
     * The client ID of your GitHub app.
     */
    clientId: string;
}
export declare class OauthAuthorizationsRevokeGrantForApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
