package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAllTags200ApplicationJsonTagsResources
 * Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
**/
public class ListAllTags200ApplicationJsonTagsResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public ListAllTags200ApplicationJsonTagsResources withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databases")
    public openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 databases;
    public ListAllTags200ApplicationJsonTagsResources withDatabases(openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 databases) {
        this.databases = databases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplets")
    public openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 droplets;
    public ListAllTags200ApplicationJsonTagsResources withDroplets(openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 droplets) {
        this.droplets = droplets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imgages")
    public openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 imgages;
    public ListAllTags200ApplicationJsonTagsResources withImgages(openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 imgages) {
        this.imgages = imgages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_tagged_uri")
    public String lastTaggedUri;
    public ListAllTags200ApplicationJsonTagsResources withLastTaggedUri(String lastTaggedUri) {
        this.lastTaggedUri = lastTaggedUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_snapshots")
    public openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 volumeSnapshots;
    public ListAllTags200ApplicationJsonTagsResources withVolumeSnapshots(openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 volumeSnapshots) {
        this.volumeSnapshots = volumeSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 volumes;
    public ListAllTags200ApplicationJsonTagsResources withVolumes(openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 volumes) {
        this.volumes = volumes;
        return this;
    }
}