import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteKubernetesNodePathParams extends SpeakeasyBase {
    clusterId: string;
    nodeId: string;
    nodePoolId: string;
}
export declare class DeleteKubernetesNodeQueryParams extends SpeakeasyBase {
    replace?: number;
    skipDrain?: number;
}
export declare class DeleteKubernetesNode401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteKubernetesNodeRequest extends SpeakeasyBase {
    pathParams: DeleteKubernetesNodePathParams;
    queryParams: DeleteKubernetesNodeQueryParams;
}
export declare class DeleteKubernetesNodeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteKubernetesNode401ApplicationJSONObject?: DeleteKubernetesNode401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
