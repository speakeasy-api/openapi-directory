import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyDropletsByTagQueryParams extends SpeakeasyBase {
    tagName: string;
}
export declare class DestroyDropletsByTag401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyDropletsByTagRequest extends SpeakeasyBase {
    queryParams: DestroyDropletsByTagQueryParams;
}
export declare class DestroyDropletsByTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyDropletsByTag401ApplicationJSONObject?: DestroyDropletsByTag401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
