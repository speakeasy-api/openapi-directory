package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchPlaceIndexForTextResponse {
    @JsonProperty("Results")
    public SearchForTextResult[] results;
    public SearchPlaceIndexForTextResponse withResults(SearchForTextResult[] results) {
        this.results = results;
        return this;
    }
    @JsonProperty("Summary")
    public SearchPlaceIndexForTextSummary summary;
    public SearchPlaceIndexForTextResponse withSummary(SearchPlaceIndexForTextSummary summary) {
        this.summary = summary;
        return this;
    }
}