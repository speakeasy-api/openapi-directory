import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAlertPolicyPathParams extends SpeakeasyBase {
    alertUuid: string;
}
export declare class DeleteAlertPolicy401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteAlertPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteAlertPolicyPathParams;
}
export declare class DeleteAlertPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteAlertPolicy401ApplicationJSONObject?: DeleteAlertPolicy401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
