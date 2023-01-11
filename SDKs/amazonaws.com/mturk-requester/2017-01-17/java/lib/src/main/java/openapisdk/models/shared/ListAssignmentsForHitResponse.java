package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssignmentsForHitResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Assignments")
    public Assignment[] assignments;
    public ListAssignmentsForHitResponse withAssignments(Assignment[] assignments) {
        this.assignments = assignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAssignmentsForHitResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumResults")
    public Long numResults;
    public ListAssignmentsForHitResponse withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
}