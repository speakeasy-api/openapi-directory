package openapisdk.models.shared;



public class DescribeAggregateIdFormatResult {
    public java.util.Map<String, Object> statuses;
    public DescribeAggregateIdFormatResult withStatuses(java.util.Map<String, Object> statuses) {
        this.statuses = statuses;
        return this;
    }
    public java.util.Map<String, Object> useLongIdsAggregated;
    public DescribeAggregateIdFormatResult withUseLongIdsAggregated(java.util.Map<String, Object> useLongIdsAggregated) {
        this.useLongIdsAggregated = useLongIdsAggregated;
        return this;
    }
}