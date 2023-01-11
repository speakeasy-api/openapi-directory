package openapisdk.models.shared;



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