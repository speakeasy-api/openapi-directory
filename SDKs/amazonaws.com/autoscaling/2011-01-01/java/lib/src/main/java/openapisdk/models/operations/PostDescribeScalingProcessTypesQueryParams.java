package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScalingProcessTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeScalingProcessTypesActionEnum action;
    public PostDescribeScalingProcessTypesQueryParams withAction(PostDescribeScalingProcessTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeScalingProcessTypesVersionEnum version;
    public PostDescribeScalingProcessTypesQueryParams withVersion(PostDescribeScalingProcessTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}