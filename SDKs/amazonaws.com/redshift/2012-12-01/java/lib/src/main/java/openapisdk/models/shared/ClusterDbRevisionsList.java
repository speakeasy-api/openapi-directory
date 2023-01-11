package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ClusterDbRevisionsList
 * Describes a <code>ClusterDbRevision</code>.
**/
public class ClusterDbRevisionsList {
    public String clusterIdentifier;
    public ClusterDbRevisionsList withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    public String currentDatabaseRevision;
    public ClusterDbRevisionsList withCurrentDatabaseRevision(String currentDatabaseRevision) {
        this.currentDatabaseRevision = currentDatabaseRevision;
        return this;
    }
    public OffsetDateTime databaseRevisionReleaseDate;
    public ClusterDbRevisionsList withDatabaseRevisionReleaseDate(OffsetDateTime databaseRevisionReleaseDate) {
        this.databaseRevisionReleaseDate = databaseRevisionReleaseDate;
        return this;
    }
    public RevisionTargetsList[] revisionTargets;
    public ClusterDbRevisionsList withRevisionTargets(RevisionTargetsList[] revisionTargets) {
        this.revisionTargets = revisionTargets;
        return this;
    }
}