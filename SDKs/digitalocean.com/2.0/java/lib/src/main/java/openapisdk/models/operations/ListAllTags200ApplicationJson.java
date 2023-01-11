package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllTags200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllTags200ApplicationJsonLinks links;
    public ListAllTags200ApplicationJson withLinks(ListAllTags200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllTags200ApplicationJsonMeta meta;
    public ListAllTags200ApplicationJson withMeta(ListAllTags200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public ListAllTags200ApplicationJsonTags[] tags;
    public ListAllTags200ApplicationJson withTags(ListAllTags200ApplicationJsonTags[] tags) {
        this.tags = tags;
        return this;
    }
}