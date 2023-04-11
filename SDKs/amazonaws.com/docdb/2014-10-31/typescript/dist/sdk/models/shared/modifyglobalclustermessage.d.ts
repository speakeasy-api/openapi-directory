import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>ModifyGlobalCluster</a>.
 */
export declare class ModifyGlobalClusterMessage extends SpeakeasyBase {
    deletionProtection?: boolean;
    globalClusterIdentifier: string;
    newGlobalClusterIdentifier?: string;
}
