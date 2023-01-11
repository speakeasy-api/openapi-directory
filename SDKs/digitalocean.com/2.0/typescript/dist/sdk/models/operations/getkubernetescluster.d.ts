import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKubernetesClusterPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetKubernetesCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetKubernetesClusterRequest extends SpeakeasyBase {
    pathParams: GetKubernetesClusterPathParams;
}
export declare class GetKubernetesClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getKubernetesCluster200ApplicationJSONAny?: any;
    getKubernetesCluster401ApplicationJSONObject?: GetKubernetesCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
