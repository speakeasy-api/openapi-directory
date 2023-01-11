package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeploymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public CreateDeploymentResponse withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotJobArn")
    public String iotJobArn;
    public CreateDeploymentResponse withIotJobArn(String iotJobArn) {
        this.iotJobArn = iotJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotJobId")
    public String iotJobId;
    public CreateDeploymentResponse withIotJobId(String iotJobId) {
        this.iotJobId = iotJobId;
        return this;
    }
}