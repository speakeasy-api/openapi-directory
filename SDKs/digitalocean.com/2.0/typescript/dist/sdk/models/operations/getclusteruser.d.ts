import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClusterUserPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetClusterUser200ApplicationJsonKubernetesClusterUser extends SpeakeasyBase {
    groups?: string[];
    username?: string;
}
export declare class GetClusterUser200ApplicationJson extends SpeakeasyBase {
    kubernetesClusterUser?: GetClusterUser200ApplicationJsonKubernetesClusterUser;
}
export declare class GetClusterUser401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetClusterUserRequest extends SpeakeasyBase {
    pathParams: GetClusterUserPathParams;
}
export declare class GetClusterUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getClusterUser200ApplicationJSONObject?: GetClusterUser200ApplicationJson;
    getClusterUser401ApplicationJSONObject?: GetClusterUser401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
