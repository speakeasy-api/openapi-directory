package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterPendingUpdates
 * A list of updates being applied to the cluster
**/
public class ClusterPendingUpdates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ACLs")
    public AcLsUpdateStatus acLs;
    public ClusterPendingUpdates withAcLs(AcLsUpdateStatus acLs) {
        this.acLs = acLs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resharding")
    public ReshardingStatus resharding;
    public ClusterPendingUpdates withResharding(ReshardingStatus resharding) {
        this.resharding = resharding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceUpdates")
    public PendingModifiedServiceUpdate[] serviceUpdates;
    public ClusterPendingUpdates withServiceUpdates(PendingModifiedServiceUpdate[] serviceUpdates) {
        this.serviceUpdates = serviceUpdates;
        return this;
    }
}