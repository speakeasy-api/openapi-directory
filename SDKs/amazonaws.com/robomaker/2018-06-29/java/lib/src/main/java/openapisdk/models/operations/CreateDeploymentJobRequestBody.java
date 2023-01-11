package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeploymentJobRequestBody {
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateDeploymentJobRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("deploymentApplicationConfigs")
    public openapisdk.models.shared.DeploymentApplicationConfig[] deploymentApplicationConfigs;
    public CreateDeploymentJobRequestBody withDeploymentApplicationConfigs(openapisdk.models.shared.DeploymentApplicationConfig[] deploymentApplicationConfigs) {
        this.deploymentApplicationConfigs = deploymentApplicationConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfig")
    public CreateDeploymentJobRequestBodyDeploymentConfig deploymentConfig;
    public CreateDeploymentJobRequestBody withDeploymentConfig(CreateDeploymentJobRequestBodyDeploymentConfig deploymentConfig) {
        this.deploymentConfig = deploymentConfig;
        return this;
    }
    @JsonProperty("fleet")
    public String fleet;
    public CreateDeploymentJobRequestBody withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateDeploymentJobRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}