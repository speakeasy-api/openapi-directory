package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAttackStatisticsResponse {
    @JsonProperty("DataItems")
    public AttackStatisticsDataItem[] dataItems;
    public DescribeAttackStatisticsResponse withDataItems(AttackStatisticsDataItem[] dataItems) {
        this.dataItems = dataItems;
        return this;
    }
    @JsonProperty("TimeRange")
    public TimeRange timeRange;
    public DescribeAttackStatisticsResponse withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}