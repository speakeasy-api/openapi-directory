package openapisdk.models.shared;



/**
 * DbClusterBacktrackMessage
 * Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
**/
public class DbClusterBacktrackMessage {
    public DbClusterBacktrackList[] dbClusterBacktracks;
    public DbClusterBacktrackMessage withDbClusterBacktracks(DbClusterBacktrackList[] dbClusterBacktracks) {
        this.dbClusterBacktracks = dbClusterBacktracks;
        return this;
    }
    public String marker;
    public DbClusterBacktrackMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}