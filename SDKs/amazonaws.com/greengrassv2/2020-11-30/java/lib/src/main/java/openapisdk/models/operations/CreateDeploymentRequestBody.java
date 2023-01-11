package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeploymentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateDeploymentRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public java.util.Map<String, openapisdk.models.shared.ComponentDeploymentSpecification> components;
    public CreateDeploymentRequestBody withComponents(java.util.Map<String, openapisdk.models.shared.ComponentDeploymentSpecification> components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentName")
    public String deploymentName;
    public CreateDeploymentRequestBody withDeploymentName(String deploymentName) {
        this.deploymentName = deploymentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentPolicies")
    public CreateDeploymentRequestBodyDeploymentPolicies deploymentPolicies;
    public CreateDeploymentRequestBody withDeploymentPolicies(CreateDeploymentRequestBodyDeploymentPolicies deploymentPolicies) {
        this.deploymentPolicies = deploymentPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotJobConfiguration")
    public CreateDeploymentRequestBodyIotJobConfiguration iotJobConfiguration;
    public CreateDeploymentRequestBody withIotJobConfiguration(CreateDeploymentRequestBodyIotJobConfiguration iotJobConfiguration) {
        this.iotJobConfiguration = iotJobConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateDeploymentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("targetArn")
    public String targetArn;
    public CreateDeploymentRequestBody withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}