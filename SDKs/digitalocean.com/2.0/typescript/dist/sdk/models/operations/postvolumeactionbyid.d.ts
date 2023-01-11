import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVolumeActionByIdPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class PostVolumeActionByIdQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare enum PostVolumeActionByIdRequestBody3TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}
export declare class PostVolumeActionByIdRequestBody3 extends SpeakeasyBase {
    region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    sizeGigabytes: number;
    type: PostVolumeActionByIdRequestBody3TypeEnum;
}
export declare class PostVolumeActionById401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostVolumeActionByIdRequest extends SpeakeasyBase {
    pathParams: PostVolumeActionByIdPathParams;
    queryParams: PostVolumeActionByIdQueryParams;
    request: any;
}
export declare class PostVolumeActionByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postVolumeActionById202ApplicationJSONAny?: any;
    postVolumeActionById401ApplicationJSONObject?: PostVolumeActionById401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
