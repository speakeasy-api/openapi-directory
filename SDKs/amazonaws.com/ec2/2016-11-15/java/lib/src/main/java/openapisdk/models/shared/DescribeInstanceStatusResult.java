package openapisdk.models.shared;



public class DescribeInstanceStatusResult {
    public java.util.Map<String, Object> instanceStatuses;
    public DescribeInstanceStatusResult withInstanceStatuses(java.util.Map<String, Object> instanceStatuses) {
        this.instanceStatuses = instanceStatuses;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeInstanceStatusResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}