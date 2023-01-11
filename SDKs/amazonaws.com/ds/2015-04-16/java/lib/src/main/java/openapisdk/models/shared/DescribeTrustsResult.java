package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTrustsResult
 * The result of a DescribeTrust request.
**/
public class DescribeTrustsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeTrustsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Trusts")
    public Trust[] trusts;
    public DescribeTrustsResult withTrusts(Trust[] trusts) {
        this.trusts = trusts;
        return this;
    }
}