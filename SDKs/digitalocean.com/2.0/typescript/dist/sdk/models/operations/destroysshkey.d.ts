import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroySshKeyPathParams extends SpeakeasyBase {
    sshKeyIdentifier: any;
}
export declare class DestroySshKey401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroySshKeyRequest extends SpeakeasyBase {
    pathParams: DestroySshKeyPathParams;
}
export declare class DestroySshKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroySshKey401ApplicationJSONObject?: DestroySshKey401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
