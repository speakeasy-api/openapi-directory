package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteStackRequest {
    @JsonProperty("StackId")
    public String stackId;
    public DeleteStackRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}