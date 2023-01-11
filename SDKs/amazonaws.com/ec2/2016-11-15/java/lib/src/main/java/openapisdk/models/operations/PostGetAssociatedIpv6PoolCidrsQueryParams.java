package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAssociatedIpv6PoolCidrsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAssociatedIpv6PoolCidrsActionEnum action;
    public PostGetAssociatedIpv6PoolCidrsQueryParams withAction(PostGetAssociatedIpv6PoolCidrsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetAssociatedIpv6PoolCidrsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetAssociatedIpv6PoolCidrsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAssociatedIpv6PoolCidrsVersionEnum version;
    public PostGetAssociatedIpv6PoolCidrsQueryParams withVersion(PostGetAssociatedIpv6PoolCidrsVersionEnum version) {
        this.version = version;
        return this;
    }
}