package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMetricFilterRequest {
    @JsonProperty("filterName")
    public String filterName;
    public DeleteMetricFilterRequest withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public DeleteMetricFilterRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
}