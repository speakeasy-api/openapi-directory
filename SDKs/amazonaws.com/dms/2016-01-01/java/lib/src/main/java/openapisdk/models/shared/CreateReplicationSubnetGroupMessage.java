package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateReplicationSubnetGroupMessage
 * <p/>
**/
public class CreateReplicationSubnetGroupMessage {
    @JsonProperty("ReplicationSubnetGroupDescription")
    public String replicationSubnetGroupDescription;
    public CreateReplicationSubnetGroupMessage withReplicationSubnetGroupDescription(String replicationSubnetGroupDescription) {
        this.replicationSubnetGroupDescription = replicationSubnetGroupDescription;
        return this;
    }
    @JsonProperty("ReplicationSubnetGroupIdentifier")
    public String replicationSubnetGroupIdentifier;
    public CreateReplicationSubnetGroupMessage withReplicationSubnetGroupIdentifier(String replicationSubnetGroupIdentifier) {
        this.replicationSubnetGroupIdentifier = replicationSubnetGroupIdentifier;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public CreateReplicationSubnetGroupMessage withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateReplicationSubnetGroupMessage withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}