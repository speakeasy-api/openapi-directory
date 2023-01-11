package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeApplicationStateRequest {
    @JsonProperty("ApplicationId")
    public String applicationId;
    public DescribeApplicationStateRequest withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}