package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdateClusterRequest {
    @JsonProperty("ClusterNames")
    public String[] clusterNames;
    public BatchUpdateClusterRequest withClusterNames(String[] clusterNames) {
        this.clusterNames = clusterNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceUpdate")
    public ServiceUpdateRequest serviceUpdate;
    public BatchUpdateClusterRequest withServiceUpdate(ServiceUpdateRequest serviceUpdate) {
        this.serviceUpdate = serviceUpdate;
        return this;
    }
}