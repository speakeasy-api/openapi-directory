package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAccessPreviewResponse {
    @JsonProperty("id")
    public String id;
    public CreateAccessPreviewResponse withId(String id) {
        this.id = id;
        return this;
    }
}