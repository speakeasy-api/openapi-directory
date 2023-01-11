import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTierPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetTier200ApplicationJson extends SpeakeasyBase {
    tier?: shared.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems;
}
export declare class GetTier401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetTierRequest extends SpeakeasyBase {
    pathParams: GetTierPathParams;
}
export declare class GetTierResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getTier200ApplicationJSONObject?: GetTier200ApplicationJson;
    getTier401ApplicationJSONObject?: GetTier401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
