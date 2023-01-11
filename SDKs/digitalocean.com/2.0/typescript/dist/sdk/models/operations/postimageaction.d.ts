import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostImageActionPathParams extends SpeakeasyBase {
    imageId: number;
}
export declare enum PostImageActionRequestBody1TypeEnum {
    Convert = "convert",
    Transfer = "transfer"
}
export declare class PostImageActionRequestBody1 extends SpeakeasyBase {
    type: PostImageActionRequestBody1TypeEnum;
}
export declare enum PostImageActionRequestBody2TypeEnum {
    Convert = "convert",
    Transfer = "transfer"
}
export declare class PostImageActionRequestBody2 extends SpeakeasyBase {
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    type: PostImageActionRequestBody2TypeEnum;
}
export declare class PostImageAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostImageActionRequest extends SpeakeasyBase {
    pathParams: PostImageActionPathParams;
    request?: any;
}
export declare class PostImageActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postImageAction401ApplicationJSONObject?: PostImageAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
    onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
}
