package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateIpSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateIpSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("IPSetId")
    public String ipSetId;
    public UpdateIpSetRequest withIpSetId(String ipSetId) {
        this.ipSetId = ipSetId;
        return this;
    }
    @JsonProperty("Updates")
    public IpSetUpdate[] updates;
    public UpdateIpSetRequest withUpdates(IpSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}