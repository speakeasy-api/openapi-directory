package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public StopResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}