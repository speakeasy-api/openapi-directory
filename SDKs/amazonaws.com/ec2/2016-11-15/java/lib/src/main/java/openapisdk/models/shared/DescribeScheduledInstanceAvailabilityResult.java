package openapisdk.models.shared;



/**
 * DescribeScheduledInstanceAvailabilityResult
 * Contains the output of DescribeScheduledInstanceAvailability.
**/
public class DescribeScheduledInstanceAvailabilityResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeScheduledInstanceAvailabilityResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> scheduledInstanceAvailabilitySet;
    public DescribeScheduledInstanceAvailabilityResult withScheduledInstanceAvailabilitySet(java.util.Map<String, Object> scheduledInstanceAvailabilitySet) {
        this.scheduledInstanceAvailabilitySet = scheduledInstanceAvailabilitySet;
        return this;
    }
}