package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateControlPanelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateControlPanelRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("ClusterArn")
    public String clusterArn;
    public CreateControlPanelRequestBody withClusterArn(String clusterArn) {
        this.clusterArn = clusterArn;
        return this;
    }
    @JsonProperty("ControlPanelName")
    public String controlPanelName;
    public CreateControlPanelRequestBody withControlPanelName(String controlPanelName) {
        this.controlPanelName = controlPanelName;
        return this;
    }
}