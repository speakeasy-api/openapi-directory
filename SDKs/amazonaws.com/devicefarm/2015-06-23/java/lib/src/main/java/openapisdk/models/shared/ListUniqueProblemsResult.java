package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUniqueProblemsResult
 * Represents the result of a list unique problems request.
**/
public class ListUniqueProblemsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListUniqueProblemsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueProblems")
    public java.util.Map<String, UniqueProblem[]> uniqueProblems;
    public ListUniqueProblemsResult withUniqueProblems(java.util.Map<String, UniqueProblem[]> uniqueProblems) {
        this.uniqueProblems = uniqueProblems;
        return this;
    }
}