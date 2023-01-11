package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpActionRequestBody2 {
    @JsonProperty("droplet_id")
    public Long dropletId;
    public PostFloatingIpActionRequestBody2 withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
    @JsonProperty("type")
    public PostFloatingIpActionRequestBody2TypeEnum type;
    public PostFloatingIpActionRequestBody2 withType(PostFloatingIpActionRequestBody2TypeEnum type) {
        this.type = type;
        return this;
    }
}