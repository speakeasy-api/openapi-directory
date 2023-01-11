import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostRegistrySubscriptionRequestBodyTierSlugEnum {
    Starter = "starter",
    Basic = "basic",
    Professional = "professional"
}


export class PostRegistrySubscriptionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tier_slug" })
  tierSlug?: PostRegistrySubscriptionRequestBodyTierSlugEnum;
}


export class PostRegistrySubscription401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostRegistrySubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostRegistrySubscriptionRequestBody;
}


export class PostRegistrySubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postRegistrySubscription401ApplicationJSONObject?: PostRegistrySubscription401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1?: shared.Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1;
}
