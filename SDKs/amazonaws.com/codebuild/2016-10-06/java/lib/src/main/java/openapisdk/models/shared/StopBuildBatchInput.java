package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopBuildBatchInput {
    @JsonProperty("id")
    public String id;
    public StopBuildBatchInput withId(String id) {
        this.id = id;
        return this;
    }
}