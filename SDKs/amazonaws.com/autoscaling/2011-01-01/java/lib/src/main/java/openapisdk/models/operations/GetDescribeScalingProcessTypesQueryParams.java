package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeScalingProcessTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeScalingProcessTypesActionEnum action;
    public GetDescribeScalingProcessTypesQueryParams withAction(GetDescribeScalingProcessTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeScalingProcessTypesVersionEnum version;
    public GetDescribeScalingProcessTypesQueryParams withVersion(GetDescribeScalingProcessTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}