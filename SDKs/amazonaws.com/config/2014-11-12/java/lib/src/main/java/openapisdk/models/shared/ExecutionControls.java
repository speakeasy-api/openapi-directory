package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionControls
 * The controls that Config uses for executing remediations.
**/
public class ExecutionControls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SsmControls")
    public SsmControls ssmControls;
    public ExecutionControls withSsmControls(SsmControls ssmControls) {
        this.ssmControls = ssmControls;
        return this;
    }
}