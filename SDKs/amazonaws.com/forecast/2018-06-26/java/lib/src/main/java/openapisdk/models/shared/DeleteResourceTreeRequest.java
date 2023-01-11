package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourceTreeRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DeleteResourceTreeRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}