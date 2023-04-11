import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateMediaAffinityIntentHandlingRequest extends SpeakeasyBase {
    acceptLanguage: string;
    requestTimeout: number;
    requestBody?: shared.UpdateMediaAffinityIntentHandlingInvocation[];
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class UpdateMediaAffinityIntentHandlingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    updateMediaAffinityIntentHandlingInvocationResponses?: any[];
}
