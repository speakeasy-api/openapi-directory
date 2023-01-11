package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchPlaceIndexForTextRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BiasPosition")
    public Double[] biasPosition;
    public SearchPlaceIndexForTextRequestBody withBiasPosition(Double[] biasPosition) {
        this.biasPosition = biasPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterBBox")
    public Double[] filterBBox;
    public SearchPlaceIndexForTextRequestBody withFilterBBox(Double[] filterBBox) {
        this.filterBBox = filterBBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterCountries")
    public String[] filterCountries;
    public SearchPlaceIndexForTextRequestBody withFilterCountries(String[] filterCountries) {
        this.filterCountries = filterCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public SearchPlaceIndexForTextRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public SearchPlaceIndexForTextRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}