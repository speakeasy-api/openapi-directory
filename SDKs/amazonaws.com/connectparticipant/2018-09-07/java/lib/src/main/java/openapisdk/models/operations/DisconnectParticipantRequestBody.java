package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisconnectParticipantRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public DisconnectParticipantRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}