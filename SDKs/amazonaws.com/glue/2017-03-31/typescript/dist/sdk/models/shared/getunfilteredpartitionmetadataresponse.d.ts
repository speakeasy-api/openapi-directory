import { SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
/**
 * Success
 */
export declare class GetUnfilteredPartitionMetadataResponse extends SpeakeasyBase {
    authorizedColumns?: string[];
    isRegisteredWithLakeFormation?: boolean;
    partition?: Partition;
}
