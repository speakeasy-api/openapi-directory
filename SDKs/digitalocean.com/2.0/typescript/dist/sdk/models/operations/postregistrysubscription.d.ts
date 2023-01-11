import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostRegistrySubscriptionRequestBodyTierSlugEnum {
    Starter = "starter",
    Basic = "basic",
    Professional = "professional"
}
export declare class PostRegistrySubscriptionRequestBody extends SpeakeasyBase {
    tierSlug?: PostRegistrySubscriptionRequestBodyTierSlugEnum;
}
export declare class PostRegistrySubscription401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostRegistrySubscriptionRequest extends SpeakeasyBase {
    request?: PostRegistrySubscriptionRequestBody;
}
export declare class PostRegistrySubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postRegistrySubscription401ApplicationJSONObject?: PostRegistrySubscription401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
    onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1?: shared.Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1;
}
