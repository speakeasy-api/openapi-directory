package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccessPreviewFindingsResponse {
    @JsonProperty("findings")
    public AccessPreviewFinding[] findings;
    public ListAccessPreviewFindingsResponse withFindings(AccessPreviewFinding[] findings) {
        this.findings = findings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAccessPreviewFindingsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}