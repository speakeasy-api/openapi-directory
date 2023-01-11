package openapisdk.models.shared;



public class DescribeTrafficMirrorFiltersResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTrafficMirrorFiltersResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorFilters;
    public DescribeTrafficMirrorFiltersResult withTrafficMirrorFilters(java.util.Map<String, Object> trafficMirrorFilters) {
        this.trafficMirrorFilters = trafficMirrorFilters;
        return this;
    }
}