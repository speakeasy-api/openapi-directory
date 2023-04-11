import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionObjects } from "./partitionobjects";
/**
 * Success
 */
export declare class GetTableObjectsResponse extends SpeakeasyBase {
    nextToken?: string;
    objects?: PartitionObjects[];
}
