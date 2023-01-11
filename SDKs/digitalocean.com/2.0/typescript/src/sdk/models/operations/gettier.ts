import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetTier200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: shared.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems;
}


export class GetTier401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetTierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTierPathParams;
}


export class GetTierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTier200ApplicationJSONObject?: GetTier200ApplicationJson;

  @SpeakeasyMetadata()
  getTier401ApplicationJSONObject?: GetTier401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
