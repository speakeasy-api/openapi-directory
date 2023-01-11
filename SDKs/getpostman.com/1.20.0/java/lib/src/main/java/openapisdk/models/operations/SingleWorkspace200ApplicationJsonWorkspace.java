package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleWorkspace200ApplicationJsonWorkspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public SingleWorkspace200ApplicationJsonWorkspaceCollections[] collections;
    public SingleWorkspace200ApplicationJsonWorkspace withCollections(SingleWorkspace200ApplicationJsonWorkspaceCollections[] collections) {
        this.collections = collections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SingleWorkspace200ApplicationJsonWorkspace withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public SingleWorkspace200ApplicationJsonWorkspaceEnvironments[] environments;
    public SingleWorkspace200ApplicationJsonWorkspace withEnvironments(SingleWorkspace200ApplicationJsonWorkspaceEnvironments[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SingleWorkspace200ApplicationJsonWorkspace withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SingleWorkspace200ApplicationJsonWorkspace withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SingleWorkspace200ApplicationJsonWorkspace withType(String type) {
        this.type = type;
        return this;
    }
}