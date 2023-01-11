package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEnvironmentStatusRequest {
    @JsonProperty("environmentId")
    public String environmentId;
    public DescribeEnvironmentStatusRequest withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}