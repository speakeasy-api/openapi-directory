import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFloatingIpActionsPathParams extends SpeakeasyBase {
    floatingIp: string;
}
export declare class ListFloatingIpActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListFloatingIpActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListFloatingIpActions200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListFloatingIpActions200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListFloatingIpActions200ApplicationJson extends SpeakeasyBase {
    actions?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[];
    links?: ListFloatingIpActions200ApplicationJsonLinks;
    meta: ListFloatingIpActions200ApplicationJsonMeta;
}
export declare class ListFloatingIpActions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListFloatingIpActionsRequest extends SpeakeasyBase {
    pathParams: ListFloatingIpActionsPathParams;
}
export declare class ListFloatingIpActionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listFloatingIpActions200ApplicationJSONObject?: ListFloatingIpActions200ApplicationJson;
    listFloatingIpActions401ApplicationJSONObject?: ListFloatingIpActions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
