package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelQuantumTaskRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CancelQuantumTaskRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}