package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestroyKubernetesAssociatedResourcesSelectiveRequestBody
 * An object containing the IDs of resources to be destroyed along with their associated with a Kubernetes cluster.
**/
public class DestroyKubernetesAssociatedResourcesSelectiveRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public String[] loadBalancers;
    public DestroyKubernetesAssociatedResourcesSelectiveRequestBody withLoadBalancers(String[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_snapshots")
    public String[] volumeSnapshots;
    public DestroyKubernetesAssociatedResourcesSelectiveRequestBody withVolumeSnapshots(String[] volumeSnapshots) {
        this.volumeSnapshots = volumeSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public String[] volumes;
    public DestroyKubernetesAssociatedResourcesSelectiveRequestBody withVolumes(String[] volumes) {
        this.volumes = volumes;
        return this;
    }
}