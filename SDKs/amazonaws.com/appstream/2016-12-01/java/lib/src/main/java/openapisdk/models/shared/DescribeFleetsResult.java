package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFleetsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fleets")
    public Fleet[] fleets;
    public DescribeFleetsResult withFleets(Fleet[] fleets) {
        this.fleets = fleets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}