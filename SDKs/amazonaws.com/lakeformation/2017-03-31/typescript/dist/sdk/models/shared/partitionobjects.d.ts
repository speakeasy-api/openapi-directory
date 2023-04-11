import { SpeakeasyBase } from "../../../internal/utils";
import { TableObject } from "./tableobject";
/**
 * A structure containing a list of partition values and table objects.
 */
export declare class PartitionObjects extends SpeakeasyBase {
    objects?: TableObject[];
    partitionValues?: string[];
}
