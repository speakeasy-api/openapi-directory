package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDropletAssociatedResources200ApplicationJsonSnapshots
 * An objects containing information about a resource associated with a Droplet.
**/
public class ListDropletAssociatedResources200ApplicationJsonSnapshots {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public String cost;
    public ListDropletAssociatedResources200ApplicationJsonSnapshots withCost(String cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListDropletAssociatedResources200ApplicationJsonSnapshots withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListDropletAssociatedResources200ApplicationJsonSnapshots withName(String name) {
        this.name = name;
        return this;
    }
}