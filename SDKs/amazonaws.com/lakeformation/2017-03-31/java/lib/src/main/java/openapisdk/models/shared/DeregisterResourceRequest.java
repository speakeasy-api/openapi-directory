package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DeregisterResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}