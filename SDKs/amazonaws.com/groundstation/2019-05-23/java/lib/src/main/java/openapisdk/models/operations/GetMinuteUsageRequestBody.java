package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMinuteUsageRequestBody {
    @JsonProperty("month")
    public Long month;
    public GetMinuteUsageRequestBody withMonth(Long month) {
        this.month = month;
        return this;
    }
    @JsonProperty("year")
    public Long year;
    public GetMinuteUsageRequestBody withYear(Long year) {
        this.year = year;
        return this;
    }
}