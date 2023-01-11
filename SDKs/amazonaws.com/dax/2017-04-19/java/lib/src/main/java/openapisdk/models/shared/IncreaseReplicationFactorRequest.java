package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IncreaseReplicationFactorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZones")
    public String[] availabilityZones;
    public IncreaseReplicationFactorRequest withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonProperty("ClusterName")
    public String clusterName;
    public IncreaseReplicationFactorRequest withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonProperty("NewReplicationFactor")
    public Long newReplicationFactor;
    public IncreaseReplicationFactorRequest withNewReplicationFactor(Long newReplicationFactor) {
        this.newReplicationFactor = newReplicationFactor;
        return this;
    }
}