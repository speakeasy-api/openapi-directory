import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllDropletNeighborsIds200ApplicationJson extends SpeakeasyBase {
    neighborIds?: number[][];
}
export declare class ListAllDropletNeighborsIds401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllDropletNeighborsIdsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllDropletNeighborsIds200ApplicationJSONObject?: ListAllDropletNeighborsIds200ApplicationJson;
    listAllDropletNeighborsIds401ApplicationJSONObject?: ListAllDropletNeighborsIds401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
