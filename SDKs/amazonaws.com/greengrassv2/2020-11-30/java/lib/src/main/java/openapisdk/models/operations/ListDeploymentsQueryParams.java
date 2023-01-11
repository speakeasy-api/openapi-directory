package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=historyFilter")
    public ListDeploymentsHistoryFilterEnum historyFilter;
    public ListDeploymentsQueryParams withHistoryFilter(ListDeploymentsHistoryFilterEnum historyFilter) {
        this.historyFilter = historyFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDeploymentsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDeploymentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetArn")
    public String targetArn;
    public ListDeploymentsQueryParams withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}