import { SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
/**
 * A partition that contains unfiltered metadata.
 */
export declare class UnfilteredPartition extends SpeakeasyBase {
    authorizedColumns?: string[];
    isRegisteredWithLakeFormation?: boolean;
    partition?: Partition;
}
