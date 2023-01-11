import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDropletActionByTagQueryParams extends SpeakeasyBase {
    tagName?: string;
}
export declare class PostDropletActionByTag401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostDropletActionByTagRequest extends SpeakeasyBase {
    queryParams: PostDropletActionByTagQueryParams;
    request?: any;
}
export declare class PostDropletActionByTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postDropletActionByTag201ApplicationJSONAny?: any;
    postDropletActionByTag401ApplicationJSONObject?: PostDropletActionByTag401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
