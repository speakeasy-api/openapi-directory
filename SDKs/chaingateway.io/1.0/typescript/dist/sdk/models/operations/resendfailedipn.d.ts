import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResendFailedIPNRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    resendFailedIPNRequest: shared.ResendFailedIPNRequest;
}
export declare class ResendFailedIPNResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    resendFailedIPN?: shared.ResendFailedIPN;
}
