import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationPortMapping } from "./destinationportmapping";
/**
 * Success
 */
export declare class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
    destinationPortMappings?: DestinationPortMapping[];
    nextToken?: string;
}
