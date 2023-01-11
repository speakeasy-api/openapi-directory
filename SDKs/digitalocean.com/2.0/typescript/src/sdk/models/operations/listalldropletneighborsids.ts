import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllDropletNeighborsIds200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=neighbor_ids" })
  neighborIds?: number[][];
}


export class ListAllDropletNeighborsIds401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDropletNeighborsIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllDropletNeighborsIds200ApplicationJSONObject?: ListAllDropletNeighborsIds200ApplicationJson;

  @SpeakeasyMetadata()
  listAllDropletNeighborsIds401ApplicationJSONObject?: ListAllDropletNeighborsIds401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
