package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInputResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfiguration")
    public InputConfiguration inputConfiguration;
    public CreateInputResponse withInputConfiguration(InputConfiguration inputConfiguration) {
        this.inputConfiguration = inputConfiguration;
        return this;
    }
}