package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSubscriptionFilterRequest {
    @JsonProperty("filterName")
    public String filterName;
    public DeleteSubscriptionFilterRequest withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public DeleteSubscriptionFilterRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
}