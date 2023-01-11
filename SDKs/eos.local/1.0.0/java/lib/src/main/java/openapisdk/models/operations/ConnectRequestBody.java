package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConnectRequestBody {
    @JsonProperty("endpoint")
    public String endpoint;
    public ConnectRequestBody withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}