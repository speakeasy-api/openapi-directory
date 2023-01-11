package openapisdk.models.shared;



public class DescribeVolumesModificationsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVolumesModificationsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> volumesModifications;
    public DescribeVolumesModificationsResult withVolumesModifications(java.util.Map<String, Object> volumesModifications) {
        this.volumesModifications = volumesModifications;
        return this;
    }
}