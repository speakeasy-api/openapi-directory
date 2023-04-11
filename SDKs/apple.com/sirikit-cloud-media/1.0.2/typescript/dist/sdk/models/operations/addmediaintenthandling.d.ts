import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddMediaIntentHandlingRequest extends SpeakeasyBase {
    acceptLanguage: string;
    requestTimeout: number;
    requestBody?: shared.AddMediaIntentHandlingInvocation[];
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class AddMediaIntentHandlingResponse extends SpeakeasyBase {
    addMediaIntentHandlingInvocationResponses?: any[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
