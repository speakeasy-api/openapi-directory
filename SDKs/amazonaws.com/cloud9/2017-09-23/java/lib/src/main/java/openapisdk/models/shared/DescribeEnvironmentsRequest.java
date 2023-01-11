package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEnvironmentsRequest {
    @JsonProperty("environmentIds")
    public String[] environmentIds;
    public DescribeEnvironmentsRequest withEnvironmentIds(String[] environmentIds) {
        this.environmentIds = environmentIds;
        return this;
    }
}