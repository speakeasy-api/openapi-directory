package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAscendingOrder")
    public Boolean isAscendingOrder;
    public ListStreamsQueryParams withIsAscendingOrder(Boolean isAscendingOrder) {
        this.isAscendingOrder = isAscendingOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListStreamsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListStreamsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}