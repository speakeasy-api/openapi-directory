import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionTargetsList } from "./revisiontargetslist";
/**
 * Describes a <code>ClusterDbRevision</code>.
**/
export declare class ClusterDbRevisionsList extends SpeakeasyBase {
    clusterIdentifier?: string;
    currentDatabaseRevision?: string;
    databaseRevisionReleaseDate?: Date;
    revisionTargets?: RevisionTargetsList[];
}
