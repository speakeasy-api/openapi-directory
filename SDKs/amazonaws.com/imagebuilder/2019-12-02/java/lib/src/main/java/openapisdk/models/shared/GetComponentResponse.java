package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetComponentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("component")
    public Component component;
    public GetComponentResponse withComponent(Component component) {
        this.component = component;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetComponentResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}