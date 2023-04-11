import { SpeakeasyBase } from "../../../internal/utils";
import { DiscoveredResource } from "./discoveredresource";
/**
 * Success
 */
export declare class ListDiscoveredResourcesResponse extends SpeakeasyBase {
    items?: DiscoveredResource[];
    nextToken?: string;
}
