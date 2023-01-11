package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMitigationActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=actionType")
    public ListMitigationActionsActionTypeEnum actionType;
    public ListMitigationActionsQueryParams withActionType(ListMitigationActionsActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListMitigationActionsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListMitigationActionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}