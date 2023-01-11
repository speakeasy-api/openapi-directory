import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteKubernetesNodePoolPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
}
export declare class DeleteKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteKubernetesNodePoolRequest extends SpeakeasyBase {
    pathParams: DeleteKubernetesNodePoolPathParams;
}
export declare class DeleteKubernetesNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteKubernetesNodePool401ApplicationJSONObject?: DeleteKubernetesNodePool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
