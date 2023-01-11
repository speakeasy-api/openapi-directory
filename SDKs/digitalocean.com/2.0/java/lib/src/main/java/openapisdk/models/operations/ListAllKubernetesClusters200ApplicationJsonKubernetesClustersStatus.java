package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
**/
public class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum state;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus withState(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum state) {
        this.state = state;
        return this;
    }
}