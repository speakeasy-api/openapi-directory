package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelReservedInstancesListingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelReservedInstancesListingActionEnum action;
    public PostCancelReservedInstancesListingQueryParams withAction(PostCancelReservedInstancesListingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelReservedInstancesListingVersionEnum version;
    public PostCancelReservedInstancesListingQueryParams withVersion(PostCancelReservedInstancesListingVersionEnum version) {
        this.version = version;
        return this;
    }
}