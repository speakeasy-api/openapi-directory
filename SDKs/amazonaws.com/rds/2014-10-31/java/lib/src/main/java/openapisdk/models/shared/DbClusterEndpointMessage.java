package openapisdk.models.shared;



public class DbClusterEndpointMessage {
    public DbClusterEndpointList[] dbClusterEndpoints;
    public DbClusterEndpointMessage withDbClusterEndpoints(DbClusterEndpointList[] dbClusterEndpoints) {
        this.dbClusterEndpoints = dbClusterEndpoints;
        return this;
    }
    public String marker;
    public DbClusterEndpointMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}