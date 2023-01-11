package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetArchiveRuleResponse
 * The response to the request.
**/
public class GetArchiveRuleResponse {
    @JsonProperty("archiveRule")
    public ArchiveRuleSummary archiveRule;
    public GetArchiveRuleResponse withArchiveRule(ArchiveRuleSummary archiveRule) {
        this.archiveRule = archiveRule;
        return this;
    }
}