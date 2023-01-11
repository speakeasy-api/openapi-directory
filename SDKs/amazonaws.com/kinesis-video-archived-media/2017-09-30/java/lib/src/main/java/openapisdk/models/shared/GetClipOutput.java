package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClipOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Payload")
    public String payload;
    public GetClipOutput withPayload(String payload) {
        this.payload = payload;
        return this;
    }
}