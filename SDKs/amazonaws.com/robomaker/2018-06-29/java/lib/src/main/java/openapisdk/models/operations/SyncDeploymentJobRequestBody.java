package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SyncDeploymentJobRequestBody {
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public SyncDeploymentJobRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("fleet")
    public String fleet;
    public SyncDeploymentJobRequestBody withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
}