package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cluster
 * A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.
**/
public class Cluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterArn")
    public String clusterArn;
    public Cluster withClusterArn(String clusterArn) {
        this.clusterArn = clusterArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterEndpoints")
    public ClusterEndpoint[] clusterEndpoints;
    public Cluster withClusterEndpoints(ClusterEndpoint[] clusterEndpoints) {
        this.clusterEndpoints = clusterEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Cluster withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusEnum status;
    public Cluster withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}