package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteIpSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteIpSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("IPSetId")
    public String ipSetId;
    public DeleteIpSetRequest withIpSetId(String ipSetId) {
        this.ipSetId = ipSetId;
        return this;
    }
}