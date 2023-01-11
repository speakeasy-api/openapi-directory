package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
public class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources resources;
    public Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems withResources(Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources resources) {
        this.resources = resources;
        return this;
    }
}