package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagRequestInput
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
**/
public class TagRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public TagRequestColorEnum color;
    public TagRequestInput withColor(TagRequestColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public String[] followers;
    public TagRequestInput withFollowers(String[] followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagRequestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public String workspace;
    public TagRequestInput withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}