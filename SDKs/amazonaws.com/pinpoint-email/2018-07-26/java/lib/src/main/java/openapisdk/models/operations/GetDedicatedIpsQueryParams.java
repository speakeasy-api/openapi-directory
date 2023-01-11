package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDedicatedIpsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDedicatedIpsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public GetDedicatedIpsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PoolName")
    public String poolName;
    public GetDedicatedIpsQueryParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
}