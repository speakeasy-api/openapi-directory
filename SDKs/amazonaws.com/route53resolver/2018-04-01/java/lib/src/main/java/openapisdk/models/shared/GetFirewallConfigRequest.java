package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallConfigRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public GetFirewallConfigRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}