package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInputRequestBody {
    @JsonProperty("inputDefinition")
    public UpdateInputRequestBodyInputDefinition inputDefinition;
    public UpdateInputRequestBody withInputDefinition(UpdateInputRequestBodyInputDefinition inputDefinition) {
        this.inputDefinition = inputDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDescription")
    public String inputDescription;
    public UpdateInputRequestBody withInputDescription(String inputDescription) {
        this.inputDescription = inputDescription;
        return this;
    }
}