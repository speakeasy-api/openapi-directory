package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DecreaseReplicationFactorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZones")
    public String[] availabilityZones;
    public DecreaseReplicationFactorRequest withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonProperty("ClusterName")
    public String clusterName;
    public DecreaseReplicationFactorRequest withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonProperty("NewReplicationFactor")
    public Long newReplicationFactor;
    public DecreaseReplicationFactorRequest withNewReplicationFactor(Long newReplicationFactor) {
        this.newReplicationFactor = newReplicationFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeIdsToRemove")
    public String[] nodeIdsToRemove;
    public DecreaseReplicationFactorRequest withNodeIdsToRemove(String[] nodeIdsToRemove) {
        this.nodeIdsToRemove = nodeIdsToRemove;
        return this;
    }
}