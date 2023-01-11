package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationListEntry
 * Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is called.
**/
public class LocationListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public LocationListEntry withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationUri")
    public String locationUri;
    public LocationListEntry withLocationUri(String locationUri) {
        this.locationUri = locationUri;
        return this;
    }
}