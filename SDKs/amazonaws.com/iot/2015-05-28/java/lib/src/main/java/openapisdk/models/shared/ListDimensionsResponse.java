package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDimensionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionNames")
    public String[] dimensionNames;
    public ListDimensionsResponse withDimensionNames(String[] dimensionNames) {
        this.dimensionNames = dimensionNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDimensionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}