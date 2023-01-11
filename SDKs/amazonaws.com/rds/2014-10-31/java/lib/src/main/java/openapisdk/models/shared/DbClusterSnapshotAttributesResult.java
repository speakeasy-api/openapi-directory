package openapisdk.models.shared;



/**
 * DbClusterSnapshotAttributesResult
 * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
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