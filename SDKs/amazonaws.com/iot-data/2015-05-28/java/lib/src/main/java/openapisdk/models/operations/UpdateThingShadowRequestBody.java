package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateThingShadowRequestBody {
    @JsonProperty("payload")
    public String payload;
    public UpdateThingShadowRequestBody withPayload(String payload) {
        this.payload = payload;
        return this;
    }
}