import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecycleKubernetesNodePoolPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
}
export declare class RecycleKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class RecycleKubernetesNodePoolRequest extends SpeakeasyBase {
    pathParams: RecycleKubernetesNodePoolPathParams;
    request: any;
}
export declare class RecycleKubernetesNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    recycleKubernetesNodePool401ApplicationJSONObject?: RecycleKubernetesNodePool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
