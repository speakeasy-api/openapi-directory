package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetChangeTokenStatusRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public GetChangeTokenStatusRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
}