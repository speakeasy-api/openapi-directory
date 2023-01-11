package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateThingShadowResponse
 * The output from the UpdateThingShadow operation.
**/
public class UpdateThingShadowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public UpdateThingShadowResponse withPayload(String payload) {
        this.payload = payload;
        return this;
    }
}