package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagProjectRequest {
    @JsonProperty("id")
    public String id;
    public UntagProjectRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public UntagProjectRequest withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}