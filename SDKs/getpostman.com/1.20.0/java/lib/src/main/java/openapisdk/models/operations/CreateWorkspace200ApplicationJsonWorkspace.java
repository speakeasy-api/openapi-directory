package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkspace200ApplicationJsonWorkspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateWorkspace200ApplicationJsonWorkspace withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateWorkspace200ApplicationJsonWorkspace withName(String name) {
        this.name = name;
        return this;
    }
}