import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFloatingIpRequestBodyAssignToDroplet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId: number;
}


export class CreateFloatingIpRequestBodyReserveToRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}


export class CreateFloatingIp202ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems })
  actions?: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[];

  @SpeakeasyMetadata({ data: "json, name=droplets", elemType: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems })
  droplets?: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[];
}


export class CreateFloatingIp202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floating_ip" })
  floatingIp?: shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CreateFloatingIp202ApplicationJsonLinks;
}


export class CreateFloatingIp401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateFloatingIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateFloatingIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createFloatingIp202ApplicationJSONObject?: CreateFloatingIp202ApplicationJson;

  @SpeakeasyMetadata()
  createFloatingIp401ApplicationJSONObject?: CreateFloatingIp401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
