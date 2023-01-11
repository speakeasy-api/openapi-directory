package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteThingShadowResponse
 * The output from the DeleteThingShadow operation.
**/
public class DeleteThingShadowResponse {
    @JsonProperty("payload")
    public String payload;
    public DeleteThingShadowResponse withPayload(String payload) {
        this.payload = payload;
        return this;
    }
}