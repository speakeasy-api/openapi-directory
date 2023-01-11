package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartSchemaCreationRequestBody {
    @JsonProperty("definition")
    public String definition;
    public StartSchemaCreationRequestBody withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
}