package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteImageRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteImageRequest withName(String name) {
        this.name = name;
        return this;
    }
}