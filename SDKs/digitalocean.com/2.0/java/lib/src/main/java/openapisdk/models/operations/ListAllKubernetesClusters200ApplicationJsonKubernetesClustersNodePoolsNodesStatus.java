package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
**/
public class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum state;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus withState(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum state) {
        this.state = state;
        return this;
    }
}