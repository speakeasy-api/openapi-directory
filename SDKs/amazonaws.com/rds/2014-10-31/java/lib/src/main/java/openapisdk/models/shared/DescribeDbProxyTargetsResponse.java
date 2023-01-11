package openapisdk.models.shared;



public class DescribeDbProxyTargetsResponse {
    public String marker;
    public DescribeDbProxyTargetsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public DbProxyTarget[] targets;
    public DescribeDbProxyTargetsResponse withTargets(DbProxyTarget[] targets) {
        this.targets = targets;
        return this;
    }
}