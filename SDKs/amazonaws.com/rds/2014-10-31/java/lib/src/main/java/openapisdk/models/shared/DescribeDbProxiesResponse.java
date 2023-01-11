package openapisdk.models.shared;



public class DescribeDbProxiesResponse {
    public DbProxy[] dbProxies;
    public DescribeDbProxiesResponse withDbProxies(DbProxy[] dbProxies) {
        this.dbProxies = dbProxies;
        return this;
    }
    public String marker;
    public DescribeDbProxiesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}