import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstanceSizePathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetInstanceSize200ApplicationJson extends SpeakeasyBase {
    instanceSize?: shared.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems;
}
export declare class GetInstanceSize401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetInstanceSizeRequest extends SpeakeasyBase {
    pathParams: GetInstanceSizePathParams;
}
export declare class GetInstanceSizeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getInstanceSize200ApplicationJSONObject?: GetInstanceSize200ApplicationJson;
    getInstanceSize401ApplicationJSONObject?: GetInstanceSize401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
