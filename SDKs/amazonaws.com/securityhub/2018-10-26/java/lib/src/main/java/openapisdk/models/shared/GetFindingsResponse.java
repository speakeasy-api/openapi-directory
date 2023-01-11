package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFindingsResponse {
    @JsonProperty("Findings")
    public AwsSecurityFinding[] findings;
    public GetFindingsResponse withFindings(AwsSecurityFinding[] findings) {
        this.findings = findings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetFindingsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}