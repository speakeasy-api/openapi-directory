package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateActivityInput {
    @JsonProperty("name")
    public String name;
    public CreateActivityInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateActivityInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}