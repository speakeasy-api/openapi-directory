package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseScheduledInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPurchaseScheduledInstancesActionEnum action;
    public PostPurchaseScheduledInstancesQueryParams withAction(PostPurchaseScheduledInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPurchaseScheduledInstancesVersionEnum version;
    public PostPurchaseScheduledInstancesQueryParams withVersion(PostPurchaseScheduledInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}