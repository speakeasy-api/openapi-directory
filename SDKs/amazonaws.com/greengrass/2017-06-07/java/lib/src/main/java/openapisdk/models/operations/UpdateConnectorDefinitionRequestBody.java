package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateConnectorDefinitionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateConnectorDefinitionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}