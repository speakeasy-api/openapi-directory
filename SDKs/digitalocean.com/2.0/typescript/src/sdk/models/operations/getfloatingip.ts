import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFloatingIpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=floating_ip" })
  floatingIp: string;
}


export class GetFloatingIp200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floating_ip" })
  floatingIp?: shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems;
}


export class GetFloatingIp401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetFloatingIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFloatingIpPathParams;
}


export class GetFloatingIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFloatingIp200ApplicationJSONObject?: GetFloatingIp200ApplicationJson;

  @SpeakeasyMetadata()
  getFloatingIp401ApplicationJSONObject?: GetFloatingIp401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
