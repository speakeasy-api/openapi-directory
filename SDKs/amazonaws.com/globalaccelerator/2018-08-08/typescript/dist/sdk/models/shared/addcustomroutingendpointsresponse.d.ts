import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointDescription } from "./customroutingendpointdescription";
/**
 * Success
 */
export declare class AddCustomRoutingEndpointsResponse extends SpeakeasyBase {
    endpointDescriptions?: CustomRoutingEndpointDescription[];
    endpointGroupArn?: string;
}
