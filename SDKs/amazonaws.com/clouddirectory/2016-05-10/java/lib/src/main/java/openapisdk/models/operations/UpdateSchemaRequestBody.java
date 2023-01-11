package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSchemaRequestBody {
    @JsonProperty("Name")
    public String name;
    public UpdateSchemaRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}