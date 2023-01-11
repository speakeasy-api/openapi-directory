package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputLambdaProcessorUpdate
 * Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.
**/
public class InputLambdaProcessorUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public InputLambdaProcessorUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARNUpdate")
    public String roleARNUpdate;
    public InputLambdaProcessorUpdate withRoleArnUpdate(String roleARNUpdate) {
        this.roleARNUpdate = roleARNUpdate;
        return this;
    }
}