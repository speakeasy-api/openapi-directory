import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateKubernetesCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateKubernetesClusterRequest extends SpeakeasyBase {
    request: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput;
}
export declare class CreateKubernetesClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createKubernetesCluster201ApplicationJSONAny?: any;
    createKubernetesCluster401ApplicationJSONObject?: CreateKubernetesCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
