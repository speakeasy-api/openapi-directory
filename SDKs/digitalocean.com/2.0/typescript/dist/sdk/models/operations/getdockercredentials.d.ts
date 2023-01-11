import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDockerCredentialsQueryParams extends SpeakeasyBase {
    expirySeconds?: number;
    readWrite?: boolean;
}
export declare class GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom extends SpeakeasyBase {
    auth?: string;
}
export declare class GetDockerCredentials200ApplicationJsonAuths extends SpeakeasyBase {
    registryDigitaloceanCom?: GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom;
}
export declare class GetDockerCredentials200ApplicationJson extends SpeakeasyBase {
    auths?: GetDockerCredentials200ApplicationJsonAuths;
}
export declare class GetDockerCredentials401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDockerCredentialsRequest extends SpeakeasyBase {
    queryParams: GetDockerCredentialsQueryParams;
}
export declare class GetDockerCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDockerCredentials200ApplicationJSONObject?: GetDockerCredentials200ApplicationJson;
    getDockerCredentials401ApplicationJSONObject?: GetDockerCredentials401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
