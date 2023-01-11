import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteKubernetesNodePoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_pool_id" })
  nodePoolId: string;
}


export class DeleteKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DeleteKubernetesNodePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteKubernetesNodePoolPathParams;
}


export class DeleteKubernetesNodePoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteKubernetesNodePool401ApplicationJSONObject?: DeleteKubernetesNodePool401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
