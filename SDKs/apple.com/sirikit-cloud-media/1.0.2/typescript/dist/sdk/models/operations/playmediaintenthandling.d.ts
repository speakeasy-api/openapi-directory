import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlayMediaIntentHandlingRequest extends SpeakeasyBase {
    acceptLanguage: string;
    requestTimeout: number;
    requestBody?: shared.PlayMediaIntentHandlingInvocation[];
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class PlayMediaIntentHandlingResponse extends SpeakeasyBase {
    contentType: string;
    playMediaIntentHandlingInvocationResponses?: any[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
