package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributionsByCachePolicyId20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CachePolicyId")
    public String cachePolicyId;
    public ListDistributionsByCachePolicyId20200531PathParams withCachePolicyId(String cachePolicyId) {
        this.cachePolicyId = cachePolicyId;
        return this;
    }
}