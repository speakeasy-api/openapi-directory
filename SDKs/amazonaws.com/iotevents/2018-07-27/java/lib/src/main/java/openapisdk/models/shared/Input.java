package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Input
 * Information about the input.
**/
public class Input {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfiguration")
    public InputConfiguration inputConfiguration;
    public Input withInputConfiguration(InputConfiguration inputConfiguration) {
        this.inputConfiguration = inputConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDefinition")
    public InputDefinition inputDefinition;
    public Input withInputDefinition(InputDefinition inputDefinition) {
        this.inputDefinition = inputDefinition;
        return this;
    }
}