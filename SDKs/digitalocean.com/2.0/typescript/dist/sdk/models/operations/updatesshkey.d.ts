import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSshKeyPathParams extends SpeakeasyBase {
    sshKeyIdentifier: any;
}
export declare class UpdateSshKeyRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateSshKey401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateSshKeyRequest extends SpeakeasyBase {
    pathParams: UpdateSshKeyPathParams;
    request: UpdateSshKeyRequestBody;
}
export declare class UpdateSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateSshKey200ApplicationJSONAny?: any;
    updateSshKey401ApplicationJSONObject?: UpdateSshKey401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
