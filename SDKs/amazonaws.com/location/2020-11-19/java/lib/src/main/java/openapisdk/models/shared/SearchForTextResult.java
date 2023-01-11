package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SearchForTextResult
 * Contains relevant Places returned by calling <code>SearchPlaceIndexForText</code>.
**/
public class SearchForTextResult {
    @JsonProperty("Place")
    public Place place;
    public SearchForTextResult withPlace(Place place) {
        this.place = place;
        return this;
    }
}