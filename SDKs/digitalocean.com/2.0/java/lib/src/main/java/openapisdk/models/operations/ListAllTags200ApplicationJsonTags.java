package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAllTags200ApplicationJsonTags
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
public class ListAllTags200ApplicationJsonTags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAllTags200ApplicationJsonTags withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public ListAllTags200ApplicationJsonTagsResources resources;
    public ListAllTags200ApplicationJsonTags withResources(ListAllTags200ApplicationJsonTagsResources resources) {
        this.resources = resources;
        return this;
    }
}