package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources
 * An object containing additional information about resource related to a Droplet requested to be destroyed.
**/
public class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshots")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[] snapshots;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources withSnapshots(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_snapshots")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[] volumeSnapshots;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources withVolumeSnapshots(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[] volumeSnapshots) {
        this.volumeSnapshots = volumeSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[] volumes;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources withVolumes(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[] volumes) {
        this.volumes = volumes;
        return this;
    }
}