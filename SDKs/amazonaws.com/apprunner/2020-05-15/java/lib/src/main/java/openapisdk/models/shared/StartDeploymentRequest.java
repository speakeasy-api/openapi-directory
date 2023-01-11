package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartDeploymentRequest {
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public StartDeploymentRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}