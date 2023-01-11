package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoggingConfigurationRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public GetLoggingConfigurationRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}