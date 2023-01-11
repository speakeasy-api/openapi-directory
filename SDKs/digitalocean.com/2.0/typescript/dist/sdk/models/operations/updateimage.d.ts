import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateImagePathParams extends SpeakeasyBase {
    imageId: number;
}
export declare class UpdateImage200ApplicationJson extends SpeakeasyBase {
    image: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage;
}
export declare class UpdateImage401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateImageRequest extends SpeakeasyBase {
    pathParams: UpdateImagePathParams;
    request: shared.Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0;
}
export declare class UpdateImageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateImage200ApplicationJSONObject?: UpdateImage200ApplicationJson;
    updateImage401ApplicationJSONObject?: UpdateImage401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
