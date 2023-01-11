package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBuildBatchInput {
    @JsonProperty("id")
    public String id;
    public DeleteBuildBatchInput withId(String id) {
        this.id = id;
        return this;
    }
}