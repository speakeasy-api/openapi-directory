import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateAppSpecRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_id" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}


export class ValidateAppSpec200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_cost" })
  appCost?: number;

  @SpeakeasyMetadata({ data: "json, name=app_is_static" })
  appIsStatic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=app_name_available" })
  appNameAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=app_name_suggestion" })
  appNameSuggestion?: string;

  @SpeakeasyMetadata({ data: "json, name=app_tier_downgrade_cost" })
  appTierDowngradeCost?: number;

  @SpeakeasyMetadata({ data: "json, name=existing_static_apps" })
  existingStaticApps?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}


export class ValidateAppSpec401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ValidateAppSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ValidateAppSpecRequestBody;
}


export class ValidateAppSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validateAppSpec200ApplicationJSONObject?: ValidateAppSpec200ApplicationJson;

  @SpeakeasyMetadata()
  validateAppSpec401ApplicationJSONObject?: ValidateAppSpec401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
