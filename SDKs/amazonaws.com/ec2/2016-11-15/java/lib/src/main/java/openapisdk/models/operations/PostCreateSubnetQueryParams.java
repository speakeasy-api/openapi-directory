package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSubnetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSubnetActionEnum action;
    public PostCreateSubnetQueryParams withAction(PostCreateSubnetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSubnetVersionEnum version;
    public PostCreateSubnetQueryParams withVersion(PostCreateSubnetVersionEnum version) {
        this.version = version;
        return this;
    }
}