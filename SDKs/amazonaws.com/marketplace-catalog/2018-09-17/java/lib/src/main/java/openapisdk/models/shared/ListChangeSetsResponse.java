package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChangeSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetSummaryList")
    public ChangeSetSummaryListItem[] changeSetSummaryList;
    public ListChangeSetsResponse withChangeSetSummaryList(ChangeSetSummaryListItem[] changeSetSummaryList) {
        this.changeSetSummaryList = changeSetSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListChangeSetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}