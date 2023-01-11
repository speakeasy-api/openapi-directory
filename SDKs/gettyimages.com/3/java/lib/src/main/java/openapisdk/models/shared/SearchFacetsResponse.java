package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchFacetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public Artist[] artists;
    public SearchFacetsResponse withArtists(Artist[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entertainment")
    public Entertainment[] entertainment;
    public SearchFacetsResponse withEntertainment(Entertainment[] entertainment) {
        this.entertainment = entertainment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public FacetEvent[] events;
    public SearchFacetsResponse withEvents(FacetEvent[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public Location[] locations;
    public SearchFacetsResponse withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specific_people")
    public SpecificPeople[] specificPeople;
    public SearchFacetsResponse withSpecificPeople(SpecificPeople[] specificPeople) {
        this.specificPeople = specificPeople;
        return this;
    }
}