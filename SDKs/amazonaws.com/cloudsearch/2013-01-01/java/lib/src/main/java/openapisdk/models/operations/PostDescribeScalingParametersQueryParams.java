package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScalingParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeScalingParametersActionEnum action;
    public PostDescribeScalingParametersQueryParams withAction(PostDescribeScalingParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeScalingParametersVersionEnum version;
    public PostDescribeScalingParametersQueryParams withVersion(PostDescribeScalingParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}