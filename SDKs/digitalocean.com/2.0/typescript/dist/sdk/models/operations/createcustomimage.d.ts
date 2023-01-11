import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomImageRequestBody extends SpeakeasyBase {
    description?: string;
    distribution?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesDistributionEnum;
    name: string;
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    tags?: string[];
    url: string;
}
export declare class CreateCustomImage401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateCustomImageRequest extends SpeakeasyBase {
    request: CreateCustomImageRequestBody;
}
export declare class CreateCustomImageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createCustomImage202ApplicationJSONAny?: any;
    createCustomImage401ApplicationJSONObject?: CreateCustomImage401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
