package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterEndpoint
 * A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.
**/
public class ClusterEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public String endpoint;
    public ClusterEndpoint withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public String region;
    public ClusterEndpoint withRegion(String region) {
        this.region = region;
        return this;
    }
}