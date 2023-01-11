import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDropletKernelsPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class ListDropletKernelsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListDropletKernels200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListDropletKernels200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListDropletKernels200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListDropletKernels200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListDropletKernels200ApplicationJson extends SpeakeasyBase {
    kernels?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel[];
    links?: ListDropletKernels200ApplicationJsonLinks;
    meta: ListDropletKernels200ApplicationJsonMeta;
}
export declare class ListDropletKernels401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDropletKernelsRequest extends SpeakeasyBase {
    pathParams: ListDropletKernelsPathParams;
    queryParams: ListDropletKernelsQueryParams;
}
export declare class ListDropletKernelsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDropletKernels200ApplicationJSONObject?: ListDropletKernels200ApplicationJson;
    listDropletKernels401ApplicationJSONObject?: ListDropletKernels401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
