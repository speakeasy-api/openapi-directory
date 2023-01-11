package openapisdk.models.shared;



public class DescribeVolumeStatusResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVolumeStatusResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> volumeStatuses;
    public DescribeVolumeStatusResult withVolumeStatuses(java.util.Map<String, Object> volumeStatuses) {
        this.volumeStatuses = volumeStatuses;
        return this;
    }
}