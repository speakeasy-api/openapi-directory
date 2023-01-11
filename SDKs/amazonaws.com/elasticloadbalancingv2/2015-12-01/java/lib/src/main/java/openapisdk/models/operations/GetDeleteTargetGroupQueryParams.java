package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTargetGroupActionEnum action;
    public GetDeleteTargetGroupQueryParams withAction(GetDeleteTargetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupArn")
    public String targetGroupArn;
    public GetDeleteTargetGroupQueryParams withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTargetGroupVersionEnum version;
    public GetDeleteTargetGroupQueryParams withVersion(GetDeleteTargetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}