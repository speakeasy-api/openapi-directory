package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingTypeProperties
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
**/
public class ThingTypeProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchableAttributes")
    public String[] searchableAttributes;
    public ThingTypeProperties withSearchableAttributes(String[] searchableAttributes) {
        this.searchableAttributes = searchableAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeDescription")
    public String thingTypeDescription;
    public ThingTypeProperties withThingTypeDescription(String thingTypeDescription) {
        this.thingTypeDescription = thingTypeDescription;
        return this;
    }
}