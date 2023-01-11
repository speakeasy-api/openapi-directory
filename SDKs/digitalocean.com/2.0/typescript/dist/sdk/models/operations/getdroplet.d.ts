import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class GetDroplet401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletRequest extends SpeakeasyBase {
    pathParams: GetDropletPathParams;
}
export declare class GetDropletResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDroplet200ApplicationJSONAny?: any;
    getDroplet401ApplicationJSONObject?: GetDroplet401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
