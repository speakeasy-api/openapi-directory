package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FunctionExecutionConfig
 * Configuration information that specifies how a Lambda function runs. 
**/
public class FunctionExecutionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsolationMode")
    public FunctionIsolationModeEnum isolationMode;
    public FunctionExecutionConfig withIsolationMode(FunctionIsolationModeEnum isolationMode) {
        this.isolationMode = isolationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunAs")
    public FunctionRunAsConfig runAs;
    public FunctionExecutionConfig withRunAs(FunctionRunAsConfig runAs) {
        this.runAs = runAs;
        return this;
    }
}