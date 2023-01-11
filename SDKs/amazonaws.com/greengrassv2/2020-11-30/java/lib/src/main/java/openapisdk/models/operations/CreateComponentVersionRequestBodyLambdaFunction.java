package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateComponentVersionRequestBodyLambdaFunction
 * Contains information about an Lambda function to import to create a component.
**/
public class CreateComponentVersionRequestBodyLambdaFunction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentDependencies")
    public java.util.Map<String, openapisdk.models.shared.ComponentDependencyRequirement> componentDependencies;
    public CreateComponentVersionRequestBodyLambdaFunction withComponentDependencies(java.util.Map<String, openapisdk.models.shared.ComponentDependencyRequirement> componentDependencies) {
        this.componentDependencies = componentDependencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentLambdaParameters")
    public openapisdk.models.shared.LambdaExecutionParameters componentLambdaParameters;
    public CreateComponentVersionRequestBodyLambdaFunction withComponentLambdaParameters(openapisdk.models.shared.LambdaExecutionParameters componentLambdaParameters) {
        this.componentLambdaParameters = componentLambdaParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentName")
    public String componentName;
    public CreateComponentVersionRequestBodyLambdaFunction withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentPlatforms")
    public openapisdk.models.shared.ComponentPlatform[] componentPlatforms;
    public CreateComponentVersionRequestBodyLambdaFunction withComponentPlatforms(openapisdk.models.shared.ComponentPlatform[] componentPlatforms) {
        this.componentPlatforms = componentPlatforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersion")
    public String componentVersion;
    public CreateComponentVersionRequestBodyLambdaFunction withComponentVersion(String componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaArn")
    public String lambdaArn;
    public CreateComponentVersionRequestBodyLambdaFunction withLambdaArn(String lambdaArn) {
        this.lambdaArn = lambdaArn;
        return this;
    }
}