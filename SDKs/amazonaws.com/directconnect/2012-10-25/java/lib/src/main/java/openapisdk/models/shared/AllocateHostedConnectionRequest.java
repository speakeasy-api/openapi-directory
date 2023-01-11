package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllocateHostedConnectionRequest {
    @JsonProperty("bandwidth")
    public String bandwidth;
    public AllocateHostedConnectionRequest withBandwidth(String bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonProperty("connectionId")
    public String connectionId;
    public AllocateHostedConnectionRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("connectionName")
    public String connectionName;
    public AllocateHostedConnectionRequest withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonProperty("ownerAccount")
    public String ownerAccount;
    public AllocateHostedConnectionRequest withOwnerAccount(String ownerAccount) {
        this.ownerAccount = ownerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public AllocateHostedConnectionRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("vlan")
    public Long vlan;
    public AllocateHostedConnectionRequest withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}