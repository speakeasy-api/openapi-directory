import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteKubernetesClusterPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class DeleteKubernetesCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteKubernetesClusterRequest extends SpeakeasyBase {
    pathParams: DeleteKubernetesClusterPathParams;
}
export declare class DeleteKubernetesClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteKubernetesCluster401ApplicationJSONObject?: DeleteKubernetesCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
