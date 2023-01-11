package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TaskAddTagRequest {
    @JsonProperty("tag")
    public String tag;
    public TaskAddTagRequest withTag(String tag) {
        this.tag = tag;
        return this;
    }
}