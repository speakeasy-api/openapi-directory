import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateKubernetesNodePoolPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
}
export declare enum UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum {
    NoSchedule = "NoSchedule",
    PreferNoSchedule = "PreferNoSchedule",
    NoExecute = "NoExecute"
}
export declare class UpdateKubernetesNodePoolRequestBodyTaints extends SpeakeasyBase {
    effect?: UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum;
    key?: string;
    value?: string;
}
export declare class UpdateKubernetesNodePoolRequestBodyInput extends SpeakeasyBase {
    autoScale?: boolean;
    count: number;
    labels?: Record<string, any>;
    maxNodes?: number;
    minNodes?: number;
    name: string;
    tags?: string[];
    taints?: UpdateKubernetesNodePoolRequestBodyTaints[];
}
export declare class UpdateKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateKubernetesNodePoolRequest extends SpeakeasyBase {
    pathParams: UpdateKubernetesNodePoolPathParams;
    request: UpdateKubernetesNodePoolRequestBodyInput;
}
export declare class UpdateKubernetesNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateKubernetesNodePool202ApplicationJSONAny?: any;
    updateKubernetesNodePool401ApplicationJSONObject?: UpdateKubernetesNodePool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
