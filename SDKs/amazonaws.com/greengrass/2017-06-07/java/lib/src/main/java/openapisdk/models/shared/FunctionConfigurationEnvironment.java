package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FunctionConfigurationEnvironment
 * The environment configuration of the function.
**/
public class FunctionConfigurationEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessSysfs")
    public Boolean accessSysfs;
    public FunctionConfigurationEnvironment withAccessSysfs(Boolean accessSysfs) {
        this.accessSysfs = accessSysfs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Execution")
    public FunctionExecutionConfig execution;
    public FunctionConfigurationEnvironment withExecution(FunctionExecutionConfig execution) {
        this.execution = execution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAccessPolicies")
    public ResourceAccessPolicy[] resourceAccessPolicies;
    public FunctionConfigurationEnvironment withResourceAccessPolicies(ResourceAccessPolicy[] resourceAccessPolicies) {
        this.resourceAccessPolicies = resourceAccessPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variables")
    public java.util.Map<String, String> variables;
    public FunctionConfigurationEnvironment withVariables(java.util.Map<String, String> variables) {
        this.variables = variables;
        return this;
    }
}