package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartHumanLoopRequestBodyHumanLoopInput
 * An object containing the human loop input in JSON format.
**/
public class StartHumanLoopRequestBodyHumanLoopInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputContent")
    public String inputContent;
    public StartHumanLoopRequestBodyHumanLoopInput withInputContent(String inputContent) {
        this.inputContent = inputContent;
        return this;
    }
}