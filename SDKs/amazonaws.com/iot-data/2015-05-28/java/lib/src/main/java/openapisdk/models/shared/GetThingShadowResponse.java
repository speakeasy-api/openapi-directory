package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetThingShadowResponse
 * The output from the GetThingShadow operation.
**/
public class GetThingShadowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public GetThingShadowResponse withPayload(String payload) {
        this.payload = payload;
        return this;
    }
}