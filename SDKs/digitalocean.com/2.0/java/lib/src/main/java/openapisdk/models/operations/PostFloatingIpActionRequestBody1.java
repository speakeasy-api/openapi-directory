package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpActionRequestBody1 {
    @JsonProperty("type")
    public PostFloatingIpActionRequestBody1TypeEnum type;
    public PostFloatingIpActionRequestBody1 withType(PostFloatingIpActionRequestBody1TypeEnum type) {
        this.type = type;
        return this;
    }
}