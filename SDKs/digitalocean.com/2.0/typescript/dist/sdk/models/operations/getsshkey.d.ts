import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSshKeyPathParams extends SpeakeasyBase {
    sshKeyIdentifier: any;
}
export declare class GetSshKey401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetSshKeyRequest extends SpeakeasyBase {
    pathParams: GetSshKeyPathParams;
}
export declare class GetSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getSshKey200ApplicationJSONAny?: any;
    getSshKey401ApplicationJSONObject?: GetSshKey401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
