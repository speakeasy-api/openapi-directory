package openapisdk.models.shared;



/**
 * DescribeScheduledInstancesResult
 * Contains the output of DescribeScheduledInstances.
**/
public class DescribeScheduledInstancesResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeScheduledInstancesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> scheduledInstanceSet;
    public DescribeScheduledInstancesResult withScheduledInstanceSet(java.util.Map<String, Object> scheduledInstanceSet) {
        this.scheduledInstanceSet = scheduledInstanceSet;
        return this;
    }
}