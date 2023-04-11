import { SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
/**
 * Success
 */
export declare class GetPartitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    partitions?: Partition[];
}
