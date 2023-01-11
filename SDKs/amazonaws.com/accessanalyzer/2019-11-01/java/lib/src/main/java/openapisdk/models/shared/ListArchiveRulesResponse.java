package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListArchiveRulesResponse
 * The response to the request.
**/
public class ListArchiveRulesResponse {
    @JsonProperty("archiveRules")
    public ArchiveRuleSummary[] archiveRules;
    public ListArchiveRulesResponse withArchiveRules(ArchiveRuleSummary[] archiveRules) {
        this.archiveRules = archiveRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListArchiveRulesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}