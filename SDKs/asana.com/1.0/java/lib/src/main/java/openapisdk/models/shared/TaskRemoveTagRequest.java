package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TaskRemoveTagRequest {
    @JsonProperty("tag")
    public String tag;
    public TaskRemoveTagRequest withTag(String tag) {
        this.tag = tag;
        return this;
    }
}