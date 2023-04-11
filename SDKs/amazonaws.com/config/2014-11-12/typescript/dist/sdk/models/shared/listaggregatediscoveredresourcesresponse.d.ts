import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";
/**
 * Success
 */
export declare class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceIdentifiers?: AggregateResourceIdentifier[];
}
