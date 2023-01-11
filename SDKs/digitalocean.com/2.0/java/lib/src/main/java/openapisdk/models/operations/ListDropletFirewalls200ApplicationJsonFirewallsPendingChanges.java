package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_id")
    public Long dropletId;
    public ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removing")
    public Boolean removing;
    public ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges withRemoving(Boolean removing) {
        this.removing = removing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges withStatus(String status) {
        this.status = status;
        return this;
    }
}