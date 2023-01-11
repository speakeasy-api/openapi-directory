package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateMacSecKeyRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public DisassociateMacSecKeyRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("secretARN")
    public String secretARN;
    public DisassociateMacSecKeyRequest withSecretArn(String secretARN) {
        this.secretARN = secretARN;
        return this;
    }
}