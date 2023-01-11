package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartStackRequest {
    @JsonProperty("StackId")
    public String stackId;
    public StartStackRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}