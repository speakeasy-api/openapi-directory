import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpgradeKubernetesClusterPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class UpgradeKubernetesCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpgradeKubernetesClusterRequest extends SpeakeasyBase {
    pathParams: UpgradeKubernetesClusterPathParams;
    request: any;
}
export declare class UpgradeKubernetesClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    upgradeKubernetesCluster401ApplicationJSONObject?: UpgradeKubernetesCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
