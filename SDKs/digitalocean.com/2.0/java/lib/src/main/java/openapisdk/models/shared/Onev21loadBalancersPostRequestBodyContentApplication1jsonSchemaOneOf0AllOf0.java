package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
}