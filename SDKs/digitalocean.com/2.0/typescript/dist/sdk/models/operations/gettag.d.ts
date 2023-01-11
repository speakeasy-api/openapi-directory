import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagPathParams extends SpeakeasyBase {
    tagId: string;
}
export declare class GetTag200ApplicationJson extends SpeakeasyBase {
    tag?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems;
}
export declare class GetTag401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetTagRequest extends SpeakeasyBase {
    pathParams: GetTagPathParams;
}
export declare class GetTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getTag200ApplicationJSONObject?: GetTag200ApplicationJson;
    getTag401ApplicationJSONObject?: GetTag401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
