import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyKubernetesAssociatedResourcesSelectivePathParams extends SpeakeasyBase {
    clusterId: string;
}
/**
 * An object containing the IDs of resources to be destroyed along with their associated with a Kubernetes cluster.
**/
export declare class DestroyKubernetesAssociatedResourcesSelectiveRequestBody extends SpeakeasyBase {
    loadBalancers?: string[];
    volumeSnapshots?: string[];
    volumes?: string[];
}
export declare class DestroyKubernetesAssociatedResourcesSelective401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyKubernetesAssociatedResourcesSelectiveRequest extends SpeakeasyBase {
    pathParams: DestroyKubernetesAssociatedResourcesSelectivePathParams;
    request: DestroyKubernetesAssociatedResourcesSelectiveRequestBody;
}
export declare class DestroyKubernetesAssociatedResourcesSelectiveResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyKubernetesAssociatedResourcesSelective401ApplicationJSONObject?: DestroyKubernetesAssociatedResourcesSelective401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
