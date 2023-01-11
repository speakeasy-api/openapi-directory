package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReplicateKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaKeyMetadata")
    public KeyMetadata replicaKeyMetadata;
    public ReplicateKeyResponse withReplicaKeyMetadata(KeyMetadata replicaKeyMetadata) {
        this.replicaKeyMetadata = replicaKeyMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaPolicy")
    public String replicaPolicy;
    public ReplicateKeyResponse withReplicaPolicy(String replicaPolicy) {
        this.replicaPolicy = replicaPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaTags")
    public Tag[] replicaTags;
    public ReplicateKeyResponse withReplicaTags(Tag[] replicaTags) {
        this.replicaTags = replicaTags;
        return this;
    }
}