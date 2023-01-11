package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterThingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public RegisterThingRequestBody withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("templateBody")
    public String templateBody;
    public RegisterThingRequestBody withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
}