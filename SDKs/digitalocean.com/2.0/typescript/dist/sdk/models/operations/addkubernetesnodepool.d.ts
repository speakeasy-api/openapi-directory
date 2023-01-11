import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddKubernetesNodePoolPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class AddKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddKubernetesNodePoolRequest extends SpeakeasyBase {
    pathParams: AddKubernetesNodePoolPathParams;
    request: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsInput;
}
export declare class AddKubernetesNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addKubernetesNodePool201ApplicationJSONAny?: any;
    addKubernetesNodePool401ApplicationJSONObject?: AddKubernetesNodePool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
