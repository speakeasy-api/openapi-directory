package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReservedInstancesListingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateReservedInstancesListingActionEnum action;
    public PostCreateReservedInstancesListingQueryParams withAction(PostCreateReservedInstancesListingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateReservedInstancesListingVersionEnum version;
    public PostCreateReservedInstancesListingQueryParams withVersion(PostCreateReservedInstancesListingVersionEnum version) {
        this.version = version;
        return this;
    }
}