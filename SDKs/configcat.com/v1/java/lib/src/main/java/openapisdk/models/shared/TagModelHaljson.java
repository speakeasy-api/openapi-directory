package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagModelHaljson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public TagModelHaljsonEmbedded embedded;
    public TagModelHaljson withEmbedded(TagModelHaljsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public TagModelHaljsonLinks links;
    public TagModelHaljson withLinks(TagModelHaljsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public TagModelHaljson withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagModelHaljson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagId")
    public Long tagId;
    public TagModelHaljson withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}