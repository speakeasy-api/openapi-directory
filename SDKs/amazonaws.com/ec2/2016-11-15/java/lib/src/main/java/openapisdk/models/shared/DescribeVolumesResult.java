package openapisdk.models.shared;



public class DescribeVolumesResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVolumesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> volumes;
    public DescribeVolumesResult withVolumes(java.util.Map<String, Object> volumes) {
        this.volumes = volumes;
        return this;
    }
}