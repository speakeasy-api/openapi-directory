import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetryDestroyWithAssociatedResourcePathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class RetryDestroyWithAssociatedResource401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class RetryDestroyWithAssociatedResourceRequest extends SpeakeasyBase {
    pathParams: RetryDestroyWithAssociatedResourcePathParams;
}
export declare class RetryDestroyWithAssociatedResourceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    retryDestroyWithAssociatedResource401ApplicationJSONObject?: RetryDestroyWithAssociatedResource401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
