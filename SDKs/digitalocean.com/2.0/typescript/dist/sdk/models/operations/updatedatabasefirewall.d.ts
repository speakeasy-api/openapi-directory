import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDatabaseFirewallPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class UpdateDatabaseFirewallRequestBodyInput extends SpeakeasyBase {
    rules?: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput[];
}
export declare class UpdateDatabaseFirewall401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateDatabaseFirewallRequest extends SpeakeasyBase {
    pathParams: UpdateDatabaseFirewallPathParams;
    request: UpdateDatabaseFirewallRequestBodyInput;
}
export declare class UpdateDatabaseFirewallResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateDatabaseFirewall401ApplicationJSONObject?: UpdateDatabaseFirewall401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
