import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>RemoveFromGlobalCluster</a>.
 */
export declare class RemoveFromGlobalClusterMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    globalClusterIdentifier: string;
}
