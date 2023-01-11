package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTriggerRequest {
    @JsonProperty("Name")
    public String name;
    public GetTriggerRequest withName(String name) {
        this.name = name;
        return this;
    }
}