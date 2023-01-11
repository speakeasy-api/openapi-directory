package openapisdk.models.shared;



public class DescribeDbProxyEndpointsResponse {
    public DbProxyEndpoint[] dbProxyEndpoints;
    public DescribeDbProxyEndpointsResponse withDbProxyEndpoints(DbProxyEndpoint[] dbProxyEndpoints) {
        this.dbProxyEndpoints = dbProxyEndpoints;
        return this;
    }
    public String marker;
    public DescribeDbProxyEndpointsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}