package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateReplicationSubnetGroupResponse
 * <p/>
**/
public class CreateReplicationSubnetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroup")
    public ReplicationSubnetGroup replicationSubnetGroup;
    public CreateReplicationSubnetGroupResponse withReplicationSubnetGroup(ReplicationSubnetGroup replicationSubnetGroup) {
        this.replicationSubnetGroup = replicationSubnetGroup;
        return this;
    }
}