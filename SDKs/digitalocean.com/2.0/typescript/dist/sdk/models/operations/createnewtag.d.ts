import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNewTag400ApplicationJson extends SpeakeasyBase {
    error: string;
    messages?: string[];
    rootCauses: string[];
}
export declare class CreateNewTag401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateNewTagRequest extends SpeakeasyBase {
    request: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput;
}
export declare class CreateNewTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createNewTag201ApplicationJSONAny?: any;
    createNewTag400ApplicationJSONObject?: CreateNewTag400ApplicationJson;
    createNewTag401ApplicationJSONObject?: CreateNewTag401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
