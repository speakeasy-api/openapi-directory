import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedResourceSummary } from "./managedresourcesummary";
/**
 * Success
 */
export declare class ListManagedResourcesResponse extends SpeakeasyBase {
    items: ManagedResourceSummary[];
    nextToken?: string;
}
