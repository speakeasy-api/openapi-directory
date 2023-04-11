import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSetSummary } from "./resourcesetsummary";
/**
 * Success
 */
export declare class ListResourceSetsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceSets?: ResourceSetSummary[];
}
