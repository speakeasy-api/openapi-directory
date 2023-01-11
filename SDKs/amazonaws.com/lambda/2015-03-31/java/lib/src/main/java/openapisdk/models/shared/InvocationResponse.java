package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvocationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Payload")
    public String payload;
    public InvocationResponse withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusCode")
    public Long statusCode;
    public InvocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}