package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeploySystemInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greengrassDeploymentId")
    public String greengrassDeploymentId;
    public DeploySystemInstanceResponse withGreengrassDeploymentId(String greengrassDeploymentId) {
        this.greengrassDeploymentId = greengrassDeploymentId;
        return this;
    }
    @JsonProperty("summary")
    public SystemInstanceSummary summary;
    public DeploySystemInstanceResponse withSummary(SystemInstanceSummary summary) {
        this.summary = summary;
        return this;
    }
}