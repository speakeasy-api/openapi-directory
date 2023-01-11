package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSubnetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSubnetActionEnum action;
    public PostDeleteSubnetQueryParams withAction(PostDeleteSubnetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSubnetVersionEnum version;
    public PostDeleteSubnetQueryParams withVersion(PostDeleteSubnetVersionEnum version) {
        this.version = version;
        return this;
    }
}