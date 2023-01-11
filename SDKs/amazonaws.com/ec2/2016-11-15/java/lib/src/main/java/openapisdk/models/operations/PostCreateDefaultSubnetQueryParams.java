package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDefaultSubnetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDefaultSubnetActionEnum action;
    public PostCreateDefaultSubnetQueryParams withAction(PostCreateDefaultSubnetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDefaultSubnetVersionEnum version;
    public PostCreateDefaultSubnetQueryParams withVersion(PostCreateDefaultSubnetVersionEnum version) {
        this.version = version;
        return this;
    }
}