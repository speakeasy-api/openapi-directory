package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateMilestoneRequestBody {
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public CreateMilestoneRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("MilestoneName")
    public String milestoneName;
    public CreateMilestoneRequestBody withMilestoneName(String milestoneName) {
        this.milestoneName = milestoneName;
        return this;
    }
}