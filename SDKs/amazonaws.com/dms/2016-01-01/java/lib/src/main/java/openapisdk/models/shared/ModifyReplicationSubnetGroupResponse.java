package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyReplicationSubnetGroupResponse
 * <p/>
**/
public class ModifyReplicationSubnetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroup")
    public ReplicationSubnetGroup replicationSubnetGroup;
    public ModifyReplicationSubnetGroupResponse withReplicationSubnetGroup(ReplicationSubnetGroup replicationSubnetGroup) {
        this.replicationSubnetGroup = replicationSubnetGroup;
        return this;
    }
}