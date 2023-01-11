package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeTargetGroupAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeTargetGroupAttributesActionEnum action;
    public GetDescribeTargetGroupAttributesQueryParams withAction(GetDescribeTargetGroupAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupArn")
    public String targetGroupArn;
    public GetDescribeTargetGroupAttributesQueryParams withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeTargetGroupAttributesVersionEnum version;
    public GetDescribeTargetGroupAttributesQueryParams withVersion(GetDescribeTargetGroupAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}