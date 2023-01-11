package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelInstanceRefreshQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelInstanceRefreshActionEnum action;
    public GetCancelInstanceRefreshQueryParams withAction(GetCancelInstanceRefreshActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetCancelInstanceRefreshQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelInstanceRefreshVersionEnum version;
    public GetCancelInstanceRefreshQueryParams withVersion(GetCancelInstanceRefreshVersionEnum version) {
        this.version = version;
        return this;
    }
}