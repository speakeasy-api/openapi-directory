package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagResponseInput
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
**/
public class TagResponseInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public TagResponseColorEnum color;
    public TagResponseInput withColor(TagResponseColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagResponseInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public WorkspaceCompactInput workspace;
    public TagResponseInput withWorkspace(WorkspaceCompactInput workspace) {
        this.workspace = workspace;
        return this;
    }
}