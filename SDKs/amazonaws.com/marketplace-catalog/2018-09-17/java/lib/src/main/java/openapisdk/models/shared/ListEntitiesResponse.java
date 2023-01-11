package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntitySummaryList")
    public EntitySummary[] entitySummaryList;
    public ListEntitiesResponse withEntitySummaryList(EntitySummary[] entitySummaryList) {
        this.entitySummaryList = entitySummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEntitiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}