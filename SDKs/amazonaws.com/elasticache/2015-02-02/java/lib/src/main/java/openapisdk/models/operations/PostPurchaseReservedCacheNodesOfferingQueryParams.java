package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedCacheNodesOfferingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPurchaseReservedCacheNodesOfferingActionEnum action;
    public PostPurchaseReservedCacheNodesOfferingQueryParams withAction(PostPurchaseReservedCacheNodesOfferingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPurchaseReservedCacheNodesOfferingVersionEnum version;
    public PostPurchaseReservedCacheNodesOfferingQueryParams withVersion(PostPurchaseReservedCacheNodesOfferingVersionEnum version) {
        this.version = version;
        return this;
    }
}