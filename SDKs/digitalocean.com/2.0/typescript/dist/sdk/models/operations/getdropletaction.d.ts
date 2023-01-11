import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletActionPathParams extends SpeakeasyBase {
    actionId: number;
    dropletId: number;
}
export declare class GetDropletAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletActionRequest extends SpeakeasyBase {
    pathParams: GetDropletActionPathParams;
}
export declare class GetDropletActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletAction200ApplicationJSONAny?: any;
    getDropletAction401ApplicationJSONObject?: GetDropletAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
