import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InstallKubernetesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addon_slugs" })
  addonSlugs: string[];

  @SpeakeasyMetadata({ data: "json, name=cluster_uuid" })
  clusterUuid: string;
}


export class InstallKubernetes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class InstallKubernetes401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class InstallKubernetesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: InstallKubernetesRequestBody;
}


export class InstallKubernetesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  installKubernetes200ApplicationJSONObject?: InstallKubernetes200ApplicationJson;

  @SpeakeasyMetadata()
  installKubernetes401ApplicationJSONObject?: InstallKubernetes401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
