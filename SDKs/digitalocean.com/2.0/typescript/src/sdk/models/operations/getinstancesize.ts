import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInstanceSizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetInstanceSize200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instance_size" })
  instanceSize?: shared.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems;
}


export class GetInstanceSize401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInstanceSizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstanceSizePathParams;
}


export class GetInstanceSizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInstanceSize200ApplicationJSONObject?: GetInstanceSize200ApplicationJson;

  @SpeakeasyMetadata()
  getInstanceSize401ApplicationJSONObject?: GetInstanceSize401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
