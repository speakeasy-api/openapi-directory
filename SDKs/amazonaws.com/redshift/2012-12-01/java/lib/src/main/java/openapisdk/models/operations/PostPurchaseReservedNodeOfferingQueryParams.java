package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedNodeOfferingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPurchaseReservedNodeOfferingActionEnum action;
    public PostPurchaseReservedNodeOfferingQueryParams withAction(PostPurchaseReservedNodeOfferingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPurchaseReservedNodeOfferingVersionEnum version;
    public PostPurchaseReservedNodeOfferingQueryParams withVersion(PostPurchaseReservedNodeOfferingVersionEnum version) {
        this.version = version;
        return this;
    }
}