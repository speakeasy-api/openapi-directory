import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageActionPathParams extends SpeakeasyBase {
    actionId: number;
    imageId: number;
}
export declare class GetImageAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetImageActionRequest extends SpeakeasyBase {
    pathParams: GetImageActionPathParams;
}
export declare class GetImageActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getImageAction401ApplicationJSONObject?: GetImageAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
    onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
}
