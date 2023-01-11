package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedInstancesOfferingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPurchaseReservedInstancesOfferingActionEnum action;
    public PostPurchaseReservedInstancesOfferingQueryParams withAction(PostPurchaseReservedInstancesOfferingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPurchaseReservedInstancesOfferingVersionEnum version;
    public PostPurchaseReservedInstancesOfferingQueryParams withVersion(PostPurchaseReservedInstancesOfferingVersionEnum version) {
        this.version = version;
        return this;
    }
}