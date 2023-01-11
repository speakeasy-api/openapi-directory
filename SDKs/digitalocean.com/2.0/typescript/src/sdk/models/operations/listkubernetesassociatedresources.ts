import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListKubernetesAssociatedResourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ListKubernetesAssociatedResources200ApplicationJson
/** 
 * An object containing the IDs of resources associated with a Kubernetes cluster.
**/
export class ListKubernetesAssociatedResources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancers", elemType: ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers })
  loadBalancers?: ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers[];

  @SpeakeasyMetadata({ data: "json, name=volume_snapshots", elemType: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems })
  volumeSnapshots?: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[];

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems })
  volumes?: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[];
}


export class ListKubernetesAssociatedResources401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListKubernetesAssociatedResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListKubernetesAssociatedResourcesPathParams;
}


export class ListKubernetesAssociatedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listKubernetesAssociatedResources200ApplicationJSONObject?: ListKubernetesAssociatedResources200ApplicationJson;

  @SpeakeasyMetadata()
  listKubernetesAssociatedResources401ApplicationJSONObject?: ListKubernetesAssociatedResources401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
