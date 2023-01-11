package openapisdk.models.shared;



/**
 * DbClusterMessage
 * Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
**/
public class DbClusterMessage {
    public DbClusterList[] dbClusters;
    public DbClusterMessage withDbClusters(DbClusterList[] dbClusters) {
        this.dbClusters = dbClusters;
        return this;
    }
    public String marker;
    public DbClusterMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}