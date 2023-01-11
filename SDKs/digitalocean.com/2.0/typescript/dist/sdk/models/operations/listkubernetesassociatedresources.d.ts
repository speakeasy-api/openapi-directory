import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListKubernetesAssociatedResourcesPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers extends SpeakeasyBase {
    id?: string;
    name?: string;
}
/**
 * An object containing the IDs of resources associated with a Kubernetes cluster.
**/
export declare class ListKubernetesAssociatedResources200ApplicationJson extends SpeakeasyBase {
    loadBalancers?: ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers[];
    volumeSnapshots?: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[];
    volumes?: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[];
}
export declare class ListKubernetesAssociatedResources401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListKubernetesAssociatedResourcesRequest extends SpeakeasyBase {
    pathParams: ListKubernetesAssociatedResourcesPathParams;
}
export declare class ListKubernetesAssociatedResourcesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listKubernetesAssociatedResources200ApplicationJSONObject?: ListKubernetesAssociatedResources200ApplicationJson;
    listKubernetesAssociatedResources401ApplicationJSONObject?: ListKubernetesAssociatedResources401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
