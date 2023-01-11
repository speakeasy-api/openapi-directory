package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagProjectRequest {
    @JsonProperty("id")
    public String id;
    public TagProjectRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public TagProjectRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}