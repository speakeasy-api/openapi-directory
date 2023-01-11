import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagePathParams extends SpeakeasyBase {
    imageId: any;
}
export declare class GetImage200ApplicationJson extends SpeakeasyBase {
    image: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage;
}
export declare class GetImage401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetImageRequest extends SpeakeasyBase {
    pathParams: GetImagePathParams;
}
export declare class GetImageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getImage200ApplicationJSONObject?: GetImage200ApplicationJson;
    getImage401ApplicationJSONObject?: GetImage401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
