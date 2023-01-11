import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyDropletPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class DestroyDroplet401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyDropletRequest extends SpeakeasyBase {
    pathParams: DestroyDropletPathParams;
}
export declare class DestroyDropletResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyDroplet401ApplicationJSONObject?: DestroyDroplet401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
