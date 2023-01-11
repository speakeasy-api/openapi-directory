package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvokeEndpointOutput {
    @JsonProperty("Body")
    public String body;
    public InvokeEndpointOutput withBody(String body) {
        this.body = body;
        return this;
    }
}