package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListQueuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListQueuesActionEnum action;
    public GetListQueuesQueryParams withAction(GetListQueuesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetListQueuesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListQueuesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=QueueNamePrefix")
    public String queueNamePrefix;
    public GetListQueuesQueryParams withQueueNamePrefix(String queueNamePrefix) {
        this.queueNamePrefix = queueNamePrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListQueuesVersionEnum version;
    public GetListQueuesQueryParams withVersion(GetListQueuesVersionEnum version) {
        this.version = version;
        return this;
    }
}