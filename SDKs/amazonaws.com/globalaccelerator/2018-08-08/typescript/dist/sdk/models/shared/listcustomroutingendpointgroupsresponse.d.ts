import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";
/**
 * Success
 */
export declare class ListCustomRoutingEndpointGroupsResponse extends SpeakeasyBase {
    endpointGroups?: CustomRoutingEndpointGroup[];
    nextToken?: string;
}
