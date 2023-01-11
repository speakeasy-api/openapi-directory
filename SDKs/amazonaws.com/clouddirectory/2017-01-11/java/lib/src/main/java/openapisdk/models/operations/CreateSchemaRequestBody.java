package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSchemaRequestBody {
    @JsonProperty("Name")
    public String name;
    public CreateSchemaRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}