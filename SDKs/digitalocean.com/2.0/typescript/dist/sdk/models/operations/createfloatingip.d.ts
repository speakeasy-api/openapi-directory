import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFloatingIpRequestBodyAssignToDroplet extends SpeakeasyBase {
    dropletId: number;
}
export declare class CreateFloatingIpRequestBodyReserveToRegion extends SpeakeasyBase {
    region: string;
}
export declare class CreateFloatingIp202ApplicationJsonLinks extends SpeakeasyBase {
    actions?: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[];
    droplets?: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[];
}
export declare class CreateFloatingIp202ApplicationJson extends SpeakeasyBase {
    floatingIp?: shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems;
    links?: CreateFloatingIp202ApplicationJsonLinks;
}
export declare class CreateFloatingIp401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateFloatingIpRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateFloatingIpResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createFloatingIp202ApplicationJSONObject?: CreateFloatingIp202ApplicationJson;
    createFloatingIp401ApplicationJSONObject?: CreateFloatingIp401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
