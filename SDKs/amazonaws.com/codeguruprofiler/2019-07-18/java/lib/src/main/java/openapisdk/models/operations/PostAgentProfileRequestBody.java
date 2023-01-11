package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAgentProfileRequestBody {
    @JsonProperty("agentProfile")
    public String agentProfile;
    public PostAgentProfileRequestBody withAgentProfile(String agentProfile) {
        this.agentProfile = agentProfile;
        return this;
    }
}