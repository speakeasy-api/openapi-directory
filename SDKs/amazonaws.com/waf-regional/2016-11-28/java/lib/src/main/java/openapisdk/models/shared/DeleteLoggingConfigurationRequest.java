package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLoggingConfigurationRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DeleteLoggingConfigurationRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}