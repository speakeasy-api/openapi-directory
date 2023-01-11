import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InstallKubernetesRequestBody extends SpeakeasyBase {
    addonSlugs: string[];
    clusterUuid: string;
}
export declare class InstallKubernetes200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class InstallKubernetes401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class InstallKubernetesRequest extends SpeakeasyBase {
    request: InstallKubernetesRequestBody;
}
export declare class InstallKubernetesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    installKubernetes200ApplicationJSONObject?: InstallKubernetes200ApplicationJson;
    installKubernetes401ApplicationJSONObject?: InstallKubernetes401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
