import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DestroyKubernetesAssociatedResourcesSelectivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


// DestroyKubernetesAssociatedResourcesSelectiveRequestBody
/** 
 * An object containing the IDs of resources to be destroyed along with their associated with a Kubernetes cluster.
**/
export class DestroyKubernetesAssociatedResourcesSelectiveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancers" })
  loadBalancers?: string[];

  @SpeakeasyMetadata({ data: "json, name=volume_snapshots" })
  volumeSnapshots?: string[];

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: string[];
}


export class DestroyKubernetesAssociatedResourcesSelective401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DestroyKubernetesAssociatedResourcesSelectiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DestroyKubernetesAssociatedResourcesSelectivePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DestroyKubernetesAssociatedResourcesSelectiveRequestBody;
}


export class DestroyKubernetesAssociatedResourcesSelectiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  destroyKubernetesAssociatedResourcesSelective401ApplicationJSONObject?: DestroyKubernetesAssociatedResourcesSelective401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
