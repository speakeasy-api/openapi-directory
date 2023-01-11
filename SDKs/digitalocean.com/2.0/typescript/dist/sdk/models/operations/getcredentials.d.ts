import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCredentialsPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetCredentialsQueryParams extends SpeakeasyBase {
    expirySeconds?: number;
}
export declare class GetCredentials200ApplicationJson extends SpeakeasyBase {
    certificateAuthorityData?: string;
    clientCertificateData?: string;
    clientKeyData?: string;
    expiresAt?: Date;
    server?: string;
    token?: string;
}
export declare class GetCredentials401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetCredentialsRequest extends SpeakeasyBase {
    pathParams: GetCredentialsPathParams;
    queryParams: GetCredentialsQueryParams;
}
export declare class GetCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getCredentials200ApplicationJSONObject?: GetCredentials200ApplicationJson;
    getCredentials401ApplicationJSONObject?: GetCredentials401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
