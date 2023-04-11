import { SpeakeasyBase } from "../../../internal/utils";
import { CostAllocationTag } from "./costallocationtag";
/**
 * Success
 */
export declare class ListCostAllocationTagsResponse extends SpeakeasyBase {
    costAllocationTags?: CostAllocationTag[];
    nextToken?: string;
}
