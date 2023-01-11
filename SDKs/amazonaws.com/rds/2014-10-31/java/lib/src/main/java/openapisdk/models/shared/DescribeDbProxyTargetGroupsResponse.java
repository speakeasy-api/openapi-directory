package openapisdk.models.shared;



public class DescribeDbProxyTargetGroupsResponse {
    public String marker;
    public DescribeDbProxyTargetGroupsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public DbProxyTargetGroup[] targetGroups;
    public DescribeDbProxyTargetGroupsResponse withTargetGroups(DbProxyTargetGroup[] targetGroups) {
        this.targetGroups = targetGroups;
        return this;
    }
}