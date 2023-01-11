package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListKubernetesAssociatedResources200ApplicationJson
 * An object containing the IDs of resources associated with a Kubernetes cluster.
**/
public class ListKubernetesAssociatedResources200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers[] loadBalancers;
    public ListKubernetesAssociatedResources200ApplicationJson withLoadBalancers(ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_snapshots")
    public openapisdk.models.shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[] volumeSnapshots;
    public ListKubernetesAssociatedResources200ApplicationJson withVolumeSnapshots(openapisdk.models.shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[] volumeSnapshots) {
        this.volumeSnapshots = volumeSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public openapisdk.models.shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[] volumes;
    public ListKubernetesAssociatedResources200ApplicationJson withVolumes(openapisdk.models.shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[] volumes) {
        this.volumes = volumes;
        return this;
    }
}