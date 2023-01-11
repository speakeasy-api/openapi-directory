package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleEnvironment200ApplicationJsonEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SingleEnvironment200ApplicationJsonEnvironment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SingleEnvironment200ApplicationJsonEnvironment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public SingleEnvironment200ApplicationJsonEnvironmentValues[] values;
    public SingleEnvironment200ApplicationJsonEnvironment withValues(SingleEnvironment200ApplicationJsonEnvironmentValues[] values) {
        this.values = values;
        return this;
    }
}