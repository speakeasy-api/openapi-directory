package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletAssociatedResources200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshots")
    public ListDropletAssociatedResources200ApplicationJsonSnapshots[] snapshots;
    public ListDropletAssociatedResources200ApplicationJson withSnapshots(ListDropletAssociatedResources200ApplicationJsonSnapshots[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_snapshots")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[] volumeSnapshots;
    public ListDropletAssociatedResources200ApplicationJson withVolumeSnapshots(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[] volumeSnapshots) {
        this.volumeSnapshots = volumeSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[] volumes;
    public ListDropletAssociatedResources200ApplicationJson withVolumes(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[] volumes) {
        this.volumes = volumes;
        return this;
    }
}