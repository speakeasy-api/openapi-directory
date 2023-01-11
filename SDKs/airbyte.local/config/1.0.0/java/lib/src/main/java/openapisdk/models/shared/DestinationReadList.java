package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationReadList {
    @JsonProperty("destinations")
    public DestinationRead[] destinations;
    public DestinationReadList withDestinations(DestinationRead[] destinations) {
        this.destinations = destinations;
        return this;
    }
}