import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetImagesListTypeEnum {
    Application = "application",
    Distribution = "distribution"
}
export declare class GetImagesListQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    private?: boolean;
    tagName?: string;
    type?: GetImagesListTypeEnum;
}
export declare class GetImagesList200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class GetImagesList200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class GetImagesList200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class GetImagesList200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class GetImagesList200ApplicationJson extends SpeakeasyBase {
    images: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage[];
    links?: GetImagesList200ApplicationJsonLinks;
    meta: GetImagesList200ApplicationJsonMeta;
}
export declare class GetImagesList401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetImagesListRequest extends SpeakeasyBase {
    queryParams: GetImagesListQueryParams;
}
export declare class GetImagesListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getImagesList200ApplicationJSONObject?: GetImagesList200ApplicationJson;
    getImagesList401ApplicationJSONObject?: GetImagesList401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
