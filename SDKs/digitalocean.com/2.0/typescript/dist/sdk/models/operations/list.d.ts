import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTypeEnum {
    Droplet = "droplet",
    Kubernetes = "kubernetes"
}
export declare class ListQueryParams extends SpeakeasyBase {
    type?: ListTypeEnum;
}
export declare class List401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListRequest extends SpeakeasyBase {
    queryParams: ListQueryParams;
}
export declare class ListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    list200ApplicationJSONAny?: any;
    list401ApplicationJSONObject?: List401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
