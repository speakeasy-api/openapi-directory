package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterClusterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public Cluster cluster;
    public RegisterClusterResponse withCluster(Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
}