package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiVersion200ApplicationJsonVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public String api;
    public CreateApiVersion200ApplicationJsonVersion withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateApiVersion200ApplicationJsonVersion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateApiVersion200ApplicationJsonVersion withName(String name) {
        this.name = name;
        return this;
    }
}