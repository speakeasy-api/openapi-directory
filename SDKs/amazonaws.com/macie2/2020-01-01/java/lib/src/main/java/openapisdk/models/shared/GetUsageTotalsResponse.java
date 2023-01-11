package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsageTotalsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public TimeRangeEnum timeRange;
    public GetUsageTotalsResponse withTimeRange(TimeRangeEnum timeRange) {
        this.timeRange = timeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTotals")
    public UsageTotal[] usageTotals;
    public GetUsageTotalsResponse withUsageTotals(UsageTotal[] usageTotals) {
        this.usageTotals = usageTotals;
        return this;
    }
}