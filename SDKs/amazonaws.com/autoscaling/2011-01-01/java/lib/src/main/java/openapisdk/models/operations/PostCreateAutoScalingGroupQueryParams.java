package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAutoScalingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateAutoScalingGroupActionEnum action;
    public PostCreateAutoScalingGroupQueryParams withAction(PostCreateAutoScalingGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateAutoScalingGroupVersionEnum version;
    public PostCreateAutoScalingGroupQueryParams withVersion(PostCreateAutoScalingGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}