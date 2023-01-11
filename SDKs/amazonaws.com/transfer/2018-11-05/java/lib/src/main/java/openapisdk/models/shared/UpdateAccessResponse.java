package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAccessResponse {
    @JsonProperty("ExternalId")
    public String externalId;
    public UpdateAccessResponse withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public UpdateAccessResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}