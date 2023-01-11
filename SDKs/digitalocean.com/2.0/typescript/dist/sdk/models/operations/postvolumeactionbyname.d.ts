import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVolumeActionByNameQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare enum PostVolumeActionByNameRequestBody1TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}
export declare class PostVolumeActionByNameRequestBody1 extends SpeakeasyBase {
    dropletId: number;
    region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    tags?: string[];
    type: PostVolumeActionByNameRequestBody1TypeEnum;
}
export declare enum PostVolumeActionByNameRequestBody2TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}
export declare class PostVolumeActionByNameRequestBody2 extends SpeakeasyBase {
    dropletId: number;
    region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    type: PostVolumeActionByNameRequestBody2TypeEnum;
}
export declare class PostVolumeActionByName401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostVolumeActionByNameRequest extends SpeakeasyBase {
    queryParams: PostVolumeActionByNameQueryParams;
    request: any;
}
export declare class PostVolumeActionByNameResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postVolumeActionByName202ApplicationJSONAny?: any;
    postVolumeActionByName401ApplicationJSONObject?: PostVolumeActionByName401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
