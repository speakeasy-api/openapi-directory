package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsResponse
 * The response to the request.
**/
public class ListFindingsResponse {
    @JsonProperty("findings")
    public FindingSummary[] findings;
    public ListFindingsResponse withFindings(FindingSummary[] findings) {
        this.findings = findings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFindingsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}