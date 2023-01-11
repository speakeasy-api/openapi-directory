package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResourceDefinitionVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public openapisdk.models.shared.Resource[] resources;
    public CreateResourceDefinitionVersionRequestBody withResources(openapisdk.models.shared.Resource[] resources) {
        this.resources = resources;
        return this;
    }
}