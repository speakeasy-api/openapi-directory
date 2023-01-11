package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyReplicationSubnetGroupMessage
 * <p/>
**/
public class ModifyReplicationSubnetGroupMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroupDescription")
    public String replicationSubnetGroupDescription;
    public ModifyReplicationSubnetGroupMessage withReplicationSubnetGroupDescription(String replicationSubnetGroupDescription) {
        this.replicationSubnetGroupDescription = replicationSubnetGroupDescription;
        return this;
    }
    @JsonProperty("ReplicationSubnetGroupIdentifier")
    public String replicationSubnetGroupIdentifier;
    public ModifyReplicationSubnetGroupMessage withReplicationSubnetGroupIdentifier(String replicationSubnetGroupIdentifier) {
        this.replicationSubnetGroupIdentifier = replicationSubnetGroupIdentifier;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public ModifyReplicationSubnetGroupMessage withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
}