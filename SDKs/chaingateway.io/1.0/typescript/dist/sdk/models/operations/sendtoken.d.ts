import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendTokenRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    sendTokenRequest: shared.SendTokenRequest;
}
export declare class SendTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    sendToken?: shared.SendToken;
}
