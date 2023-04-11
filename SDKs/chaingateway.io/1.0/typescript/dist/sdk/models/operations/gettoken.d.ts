import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTokenRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    getTokenRequest: shared.GetTokenRequest;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getToken?: shared.GetToken;
}
