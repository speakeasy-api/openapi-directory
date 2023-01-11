import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAlertPolicyPathParams extends SpeakeasyBase {
    alertUuid: string;
}
export declare class UpdateAlertPolicy401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateAlertPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateAlertPolicyPathParams;
    request: shared.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema;
}
export declare class UpdateAlertPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateAlertPolicy401ApplicationJSONObject?: UpdateAlertPolicy401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
    onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems?: shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems;
}
