package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEnvironmentRelations200ApplicationJsonEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetEnvironmentRelations200ApplicationJsonEnvironment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetEnvironmentRelations200ApplicationJsonEnvironment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public GetEnvironmentRelations200ApplicationJsonEnvironment withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}