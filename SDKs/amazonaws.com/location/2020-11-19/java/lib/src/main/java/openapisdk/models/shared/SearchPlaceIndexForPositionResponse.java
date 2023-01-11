package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchPlaceIndexForPositionResponse {
    @JsonProperty("Results")
    public SearchForPositionResult[] results;
    public SearchPlaceIndexForPositionResponse withResults(SearchForPositionResult[] results) {
        this.results = results;
        return this;
    }
    @JsonProperty("Summary")
    public SearchPlaceIndexForPositionSummary summary;
    public SearchPlaceIndexForPositionResponse withSummary(SearchPlaceIndexForPositionSummary summary) {
        this.summary = summary;
        return this;
    }
}