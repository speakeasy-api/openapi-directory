package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvokeEndpointRequestBody {
    @JsonProperty("Body")
    public String body;
    public InvokeEndpointRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}