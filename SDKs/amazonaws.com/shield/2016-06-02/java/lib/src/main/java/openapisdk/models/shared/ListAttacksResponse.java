package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAttacksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackSummaries")
    public AttackSummary[] attackSummaries;
    public ListAttacksResponse withAttackSummaries(AttackSummary[] attackSummaries) {
        this.attackSummaries = attackSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAttacksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}