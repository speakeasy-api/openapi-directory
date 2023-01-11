package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicaConfigurationRequest
 * A request to configure the number of replicas in a shard
**/
public class ReplicaConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaCount")
    public Long replicaCount;
    public ReplicaConfigurationRequest withReplicaCount(Long replicaCount) {
        this.replicaCount = replicaCount;
        return this;
    }
}