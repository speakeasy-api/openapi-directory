package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SearchForPositionResult
 * Specifies a single point of interest, or Place as a result of a search query obtained from a dataset configured in the place index resource.
**/
public class SearchForPositionResult {
    @JsonProperty("Place")
    public Place place;
    public SearchForPositionResult withPlace(Place place) {
        this.place = place;
        return this;
    }
}