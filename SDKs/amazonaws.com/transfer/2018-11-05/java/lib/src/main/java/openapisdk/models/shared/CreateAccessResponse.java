package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAccessResponse {
    @JsonProperty("ExternalId")
    public String externalId;
    public CreateAccessResponse withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public CreateAccessResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}