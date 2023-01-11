package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInputRequestBody {
    @JsonProperty("inputDefinition")
    public CreateInputRequestBodyInputDefinition inputDefinition;
    public CreateInputRequestBody withInputDefinition(CreateInputRequestBodyInputDefinition inputDefinition) {
        this.inputDefinition = inputDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDescription")
    public String inputDescription;
    public CreateInputRequestBody withInputDescription(String inputDescription) {
        this.inputDescription = inputDescription;
        return this;
    }
    @JsonProperty("inputName")
    public String inputName;
    public CreateInputRequestBody withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateInputRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}