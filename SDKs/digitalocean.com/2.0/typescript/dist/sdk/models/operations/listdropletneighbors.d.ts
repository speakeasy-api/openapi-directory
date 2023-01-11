import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDropletNeighborsPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class ListDropletNeighbors200ApplicationJson extends SpeakeasyBase {
    droplets?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems[];
}
export declare class ListDropletNeighbors401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDropletNeighborsRequest extends SpeakeasyBase {
    pathParams: ListDropletNeighborsPathParams;
}
export declare class ListDropletNeighborsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDropletNeighbors200ApplicationJSONObject?: ListDropletNeighbors200ApplicationJson;
    listDropletNeighbors401ApplicationJSONObject?: ListDropletNeighbors401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
