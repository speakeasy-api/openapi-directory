package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchPlaceIndexForPositionSummary
 * A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
**/
public class SearchPlaceIndexForPositionSummary {
    @JsonProperty("DataSource")
    public String dataSource;
    public SearchPlaceIndexForPositionSummary withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public SearchPlaceIndexForPositionSummary withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonProperty("Position")
    public Double[] position;
    public SearchPlaceIndexForPositionSummary withPosition(Double[] position) {
        this.position = position;
        return this;
    }
}