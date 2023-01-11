package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaLinuxProcessParams
 * Contains parameters for a Linux process that contains an Lambda function.
**/
public class LambdaLinuxProcessParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerParams")
    public LambdaContainerParams containerParams;
    public LambdaLinuxProcessParams withContainerParams(LambdaContainerParams containerParams) {
        this.containerParams = containerParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isolationMode")
    public LambdaIsolationModeEnum isolationMode;
    public LambdaLinuxProcessParams withIsolationMode(LambdaIsolationModeEnum isolationMode) {
        this.isolationMode = isolationMode;
        return this;
    }
}