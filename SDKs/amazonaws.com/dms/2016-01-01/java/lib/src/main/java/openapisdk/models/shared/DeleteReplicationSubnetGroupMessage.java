package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteReplicationSubnetGroupMessage
 * <p/>
**/
public class DeleteReplicationSubnetGroupMessage {
    @JsonProperty("ReplicationSubnetGroupIdentifier")
    public String replicationSubnetGroupIdentifier;
    public DeleteReplicationSubnetGroupMessage withReplicationSubnetGroupIdentifier(String replicationSubnetGroupIdentifier) {
        this.replicationSubnetGroupIdentifier = replicationSubnetGroupIdentifier;
        return this;
    }
}