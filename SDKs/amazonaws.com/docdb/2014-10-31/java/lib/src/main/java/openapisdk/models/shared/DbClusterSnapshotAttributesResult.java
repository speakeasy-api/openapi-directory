package openapisdk.models.shared;



/**
 * DbClusterSnapshotAttributesResult
 * Detailed information about the attributes that are associated with a cluster snapshot.
**/
public class DbClusterSnapshotAttributesResult {
    public DbClusterSnapshotAttributeList[] dbClusterSnapshotAttributes;
    public DbClusterSnapshotAttributesResult withDbClusterSnapshotAttributes(DbClusterSnapshotAttributeList[] dbClusterSnapshotAttributes) {
        this.dbClusterSnapshotAttributes = dbClusterSnapshotAttributes;
        return this;
    }
    public String dbClusterSnapshotIdentifier;
    public DbClusterSnapshotAttributesResult withDbClusterSnapshotIdentifier(String dbClusterSnapshotIdentifier) {
        this.dbClusterSnapshotIdentifier = dbClusterSnapshotIdentifier;
        return this;
    }
}