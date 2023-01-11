import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRegistryRequestBodySubscriptionTierSlugEnum {
    Starter = "starter",
    Basic = "basic",
    Professional = "professional"
}
export declare class CreateRegistryRequestBody extends SpeakeasyBase {
    name: string;
    subscriptionTierSlug: CreateRegistryRequestBodySubscriptionTierSlugEnum;
}
export declare class CreateRegistry401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateRegistryRequest extends SpeakeasyBase {
    request: CreateRegistryRequestBody;
}
export declare class CreateRegistryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createRegistry201ApplicationJSONAny?: any;
    createRegistry401ApplicationJSONObject?: CreateRegistry401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
