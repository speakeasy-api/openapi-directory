import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListKubernetesOptions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: any;
}


export class ListKubernetesOptions401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListKubernetesOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listKubernetesOptions200ApplicationJSONObject?: ListKubernetesOptions200ApplicationJson;

  @SpeakeasyMetadata()
  listKubernetesOptions401ApplicationJSONObject?: ListKubernetesOptions401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
