package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAssociatedIpv6PoolCidrsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAssociatedIpv6PoolCidrsActionEnum action;
    public GetGetAssociatedIpv6PoolCidrsQueryParams withAction(GetGetAssociatedIpv6PoolCidrsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetAssociatedIpv6PoolCidrsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetGetAssociatedIpv6PoolCidrsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetGetAssociatedIpv6PoolCidrsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PoolId")
    public String poolId;
    public GetGetAssociatedIpv6PoolCidrsQueryParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAssociatedIpv6PoolCidrsVersionEnum version;
    public GetGetAssociatedIpv6PoolCidrsQueryParams withVersion(GetGetAssociatedIpv6PoolCidrsVersionEnum version) {
        this.version = version;
        return this;
    }
}