package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLensesOutput
 * Output of a list lenses call.
**/
public class ListLensesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensSummaries")
    public LensSummary[] lensSummaries;
    public ListLensesOutput withLensSummaries(LensSummary[] lensSummaries) {
        this.lensSummaries = lensSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLensesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}