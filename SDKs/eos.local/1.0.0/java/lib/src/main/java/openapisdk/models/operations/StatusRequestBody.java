package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StatusRequestBody {
    @JsonProperty("endpoint")
    public String endpoint;
    public StatusRequestBody withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}