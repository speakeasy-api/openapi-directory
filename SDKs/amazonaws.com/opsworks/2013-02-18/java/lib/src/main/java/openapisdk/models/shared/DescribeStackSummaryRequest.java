package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStackSummaryRequest {
    @JsonProperty("StackId")
    public String stackId;
    public DescribeStackSummaryRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}