import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListTiers200ApplicationJsonTiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_seconds" })
  buildSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=egress_bandwidth_bytes" })
  egressBandwidthBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=storage_bytes" })
  storageBytes?: string;
}


export class ListTiers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ListTiers200ApplicationJsonTiers })
  tiers?: ListTiers200ApplicationJsonTiers[];
}


export class ListTiers401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListTiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listTiers200ApplicationJSONObject?: ListTiers200ApplicationJson;

  @SpeakeasyMetadata()
  listTiers401ApplicationJSONObject?: ListTiers401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
