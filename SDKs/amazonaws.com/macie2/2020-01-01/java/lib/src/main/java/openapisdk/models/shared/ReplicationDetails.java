package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicationDetails
 * Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
**/
public class ReplicationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicated")
    public Boolean replicated;
    public ReplicationDetails withReplicated(Boolean replicated) {
        this.replicated = replicated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicatedExternally")
    public Boolean replicatedExternally;
    public ReplicationDetails withReplicatedExternally(Boolean replicatedExternally) {
        this.replicatedExternally = replicatedExternally;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationAccounts")
    public String[] replicationAccounts;
    public ReplicationDetails withReplicationAccounts(String[] replicationAccounts) {
        this.replicationAccounts = replicationAccounts;
        return this;
    }
}