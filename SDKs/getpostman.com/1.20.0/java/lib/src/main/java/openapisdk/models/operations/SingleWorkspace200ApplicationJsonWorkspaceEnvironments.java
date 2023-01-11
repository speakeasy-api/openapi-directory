package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleWorkspace200ApplicationJsonWorkspaceEnvironments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SingleWorkspace200ApplicationJsonWorkspaceEnvironments withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SingleWorkspace200ApplicationJsonWorkspaceEnvironments withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public SingleWorkspace200ApplicationJsonWorkspaceEnvironments withUid(String uid) {
        this.uid = uid;
        return this;
    }
}