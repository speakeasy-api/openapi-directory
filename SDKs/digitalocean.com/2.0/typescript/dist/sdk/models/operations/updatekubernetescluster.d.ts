import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateKubernetesClusterPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class UpdateKubernetesClusterRequestBodyInput extends SpeakeasyBase {
    autoUpgrade?: boolean;
    maintenancePolicy?: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyInput;
    name: string;
    surgeUpgrade?: boolean;
    tags?: string[];
}
export declare class UpdateKubernetesCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateKubernetesClusterRequest extends SpeakeasyBase {
    pathParams: UpdateKubernetesClusterPathParams;
    request: UpdateKubernetesClusterRequestBodyInput;
}
export declare class UpdateKubernetesClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateKubernetesCluster202ApplicationJSONAny?: any;
    updateKubernetesCluster401ApplicationJSONObject?: UpdateKubernetesCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
