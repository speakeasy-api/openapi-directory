package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisconnectRequestBody {
    @JsonProperty("endpoint")
    public String endpoint;
    public DisconnectRequestBody withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}