package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBackendEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentArtifacts")
    public String deploymentArtifacts;
    public CreateBackendEnvironmentRequestBody withDeploymentArtifacts(String deploymentArtifacts) {
        this.deploymentArtifacts = deploymentArtifacts;
        return this;
    }
    @JsonProperty("environmentName")
    public String environmentName;
    public CreateBackendEnvironmentRequestBody withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackName")
    public String stackName;
    public CreateBackendEnvironmentRequestBody withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
}