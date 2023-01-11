import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFloatingIpPathParams extends SpeakeasyBase {
    floatingIp: string;
}
export declare class DeleteFloatingIp401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteFloatingIpRequest extends SpeakeasyBase {
    pathParams: DeleteFloatingIpPathParams;
}
export declare class DeleteFloatingIpResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteFloatingIp401ApplicationJSONObject?: DeleteFloatingIp401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
