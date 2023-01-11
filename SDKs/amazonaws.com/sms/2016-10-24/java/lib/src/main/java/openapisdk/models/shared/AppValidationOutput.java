package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppValidationOutput
 * Output from validating an application.
**/
public class AppValidationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssmOutput")
    public SsmOutput ssmOutput;
    public AppValidationOutput withSsmOutput(SsmOutput ssmOutput) {
        this.ssmOutput = ssmOutput;
        return this;
    }
}