import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMediaAffinityIntentHandlingHeaders extends SpeakeasyBase {
    acceptLanguage: string;
    requestTimeout: number;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class UpdateMediaAffinityIntentHandlingRequest extends SpeakeasyBase {
    headers: UpdateMediaAffinityIntentHandlingHeaders;
    request?: shared.UpdateMediaAffinityIntentHandlingInvocation[];
}
export declare class UpdateMediaAffinityIntentHandlingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateMediaAffinityIntentHandlingInvocationResponses?: any[];
}
