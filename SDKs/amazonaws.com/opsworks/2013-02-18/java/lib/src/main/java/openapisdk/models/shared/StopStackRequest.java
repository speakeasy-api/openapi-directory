package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopStackRequest {
    @JsonProperty("StackId")
    public String stackId;
    public StopStackRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}