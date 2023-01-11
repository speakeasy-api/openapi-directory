package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFloatingIpRequestBodyAssignToDroplet {
    @JsonProperty("droplet_id")
    public Long dropletId;
    public CreateFloatingIpRequestBodyAssignToDroplet withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}