package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkersWithQualificationTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWorkersWithQualificationTypeResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumResults")
    public Long numResults;
    public ListWorkersWithQualificationTypeResponse withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Qualifications")
    public Qualification[] qualifications;
    public ListWorkersWithQualificationTypeResponse withQualifications(Qualification[] qualifications) {
        this.qualifications = qualifications;
        return this;
    }
}