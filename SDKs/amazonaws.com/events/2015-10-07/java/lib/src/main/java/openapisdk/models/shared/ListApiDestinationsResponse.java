package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApiDestinationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiDestinations")
    public ApiDestination[] apiDestinations;
    public ListApiDestinationsResponse withApiDestinations(ApiDestination[] apiDestinations) {
        this.apiDestinations = apiDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListApiDestinationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}