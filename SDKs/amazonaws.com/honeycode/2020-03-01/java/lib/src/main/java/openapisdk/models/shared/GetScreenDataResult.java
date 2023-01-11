package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetScreenDataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetScreenDataResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("results")
    public java.util.Map<String, ResultSet> results;
    public GetScreenDataResult withResults(java.util.Map<String, ResultSet> results) {
        this.results = results;
        return this;
    }
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public GetScreenDataResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}