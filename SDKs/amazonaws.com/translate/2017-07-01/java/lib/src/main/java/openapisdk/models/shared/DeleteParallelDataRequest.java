package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteParallelDataRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteParallelDataRequest withName(String name) {
        this.name = name;
        return this;
    }
}