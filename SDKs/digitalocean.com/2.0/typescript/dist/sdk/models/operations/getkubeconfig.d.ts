import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKubeconfigPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetKubeconfigQueryParams extends SpeakeasyBase {
    expirySeconds?: number;
}
export declare class GetKubeconfig401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetKubeconfigRequest extends SpeakeasyBase {
    pathParams: GetKubeconfigPathParams;
    queryParams: GetKubeconfigQueryParams;
}
export declare class GetKubeconfigResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getKubeconfig200ApplicationYamlString?: string;
    getKubeconfig401ApplicationJSONObject?: GetKubeconfig401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
