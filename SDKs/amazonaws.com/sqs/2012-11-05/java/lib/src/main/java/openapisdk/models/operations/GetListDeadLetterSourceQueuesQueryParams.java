package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListDeadLetterSourceQueuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListDeadLetterSourceQueuesActionEnum action;
    public GetListDeadLetterSourceQueuesQueryParams withAction(GetListDeadLetterSourceQueuesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetListDeadLetterSourceQueuesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListDeadLetterSourceQueuesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListDeadLetterSourceQueuesVersionEnum version;
    public GetListDeadLetterSourceQueuesQueryParams withVersion(GetListDeadLetterSourceQueuesVersionEnum version) {
        this.version = version;
        return this;
    }
}