import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActionPathParams extends SpeakeasyBase {
    actionId: number;
}
export declare class GetAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetActionRequest extends SpeakeasyBase {
    pathParams: GetActionPathParams;
}
export declare class GetActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getAction200ApplicationJSONAny?: any;
    getAction401ApplicationJSONObject?: GetAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
