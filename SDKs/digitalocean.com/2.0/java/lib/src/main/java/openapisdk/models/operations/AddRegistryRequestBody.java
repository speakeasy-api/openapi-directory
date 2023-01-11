package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddRegistryRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_uuids")
    public String[] clusterUuids;
    public AddRegistryRequestBody withClusterUuids(String[] clusterUuids) {
        this.clusterUuids = clusterUuids;
        return this;
    }
}