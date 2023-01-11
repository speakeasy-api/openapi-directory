package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyReservedInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyReservedInstancesActionEnum action;
    public PostModifyReservedInstancesQueryParams withAction(PostModifyReservedInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyReservedInstancesVersionEnum version;
    public PostModifyReservedInstancesQueryParams withVersion(PostModifyReservedInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}