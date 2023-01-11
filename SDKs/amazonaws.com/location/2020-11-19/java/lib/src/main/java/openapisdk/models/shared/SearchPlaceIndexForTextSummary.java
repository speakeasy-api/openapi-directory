package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchPlaceIndexForTextSummary
 * A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.
**/
public class SearchPlaceIndexForTextSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BiasPosition")
    public Double[] biasPosition;
    public SearchPlaceIndexForTextSummary withBiasPosition(Double[] biasPosition) {
        this.biasPosition = biasPosition;
        return this;
    }
    @JsonProperty("DataSource")
    public String dataSource;
    public SearchPlaceIndexForTextSummary withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterBBox")
    public Double[] filterBBox;
    public SearchPlaceIndexForTextSummary withFilterBBox(Double[] filterBBox) {
        this.filterBBox = filterBBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterCountries")
    public String[] filterCountries;
    public SearchPlaceIndexForTextSummary withFilterCountries(String[] filterCountries) {
        this.filterCountries = filterCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public SearchPlaceIndexForTextSummary withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultBBox")
    public Double[] resultBBox;
    public SearchPlaceIndexForTextSummary withResultBBox(Double[] resultBBox) {
        this.resultBBox = resultBBox;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public SearchPlaceIndexForTextSummary withText(String text) {
        this.text = text;
        return this;
    }
}