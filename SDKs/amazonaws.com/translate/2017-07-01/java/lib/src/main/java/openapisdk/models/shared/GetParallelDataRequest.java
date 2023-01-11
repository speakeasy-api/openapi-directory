package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetParallelDataRequest {
    @JsonProperty("Name")
    public String name;
    public GetParallelDataRequest withName(String name) {
        this.name = name;
        return this;
    }
}