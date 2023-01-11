package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSchemaRequest {
    @JsonProperty("name")
    public String name;
    public CreateSchemaRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("schema")
    public String schema;
    public CreateSchemaRequest withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}