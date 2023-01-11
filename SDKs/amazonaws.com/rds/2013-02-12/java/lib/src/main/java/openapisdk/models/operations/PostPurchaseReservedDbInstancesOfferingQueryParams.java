package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseReservedDbInstancesOfferingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPurchaseReservedDbInstancesOfferingActionEnum action;
    public PostPurchaseReservedDbInstancesOfferingQueryParams withAction(PostPurchaseReservedDbInstancesOfferingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPurchaseReservedDbInstancesOfferingVersionEnum version;
    public PostPurchaseReservedDbInstancesOfferingQueryParams withVersion(PostPurchaseReservedDbInstancesOfferingVersionEnum version) {
        this.version = version;
        return this;
    }
}