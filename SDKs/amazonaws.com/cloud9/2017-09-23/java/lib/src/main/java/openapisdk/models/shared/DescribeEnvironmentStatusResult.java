package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEnvironmentStatusResult {
    @JsonProperty("message")
    public String message;
    public DescribeEnvironmentStatusResult withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("status")
    public EnvironmentStatusEnum status;
    public DescribeEnvironmentStatusResult withStatus(EnvironmentStatusEnum status) {
        this.status = status;
        return this;
    }
}