import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEvictionPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}

export enum GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum {
    Noeviction = "noeviction",
    AllkeysLru = "allkeys_lru",
    AllkeysRandom = "allkeys_random",
    VolatileLru = "volatile_lru",
    VolatileRandom = "volatile_random",
    VolatileTtl = "volatile_ttl"
}


export class GetEvictionPolicy200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eviction_policy" })
  evictionPolicy: GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum;
}


export class GetEvictionPolicy401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetEvictionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEvictionPolicyPathParams;
}


export class GetEvictionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEvictionPolicy200ApplicationJSONObject?: GetEvictionPolicy200ApplicationJson;

  @SpeakeasyMetadata()
  getEvictionPolicy401ApplicationJSONObject?: GetEvictionPolicy401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
