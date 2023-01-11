package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEngagementsResult {
    @JsonProperty("Engagements")
    public Engagement[] engagements;
    public ListEngagementsResult withEngagements(Engagement[] engagements) {
        this.engagements = engagements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEngagementsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}