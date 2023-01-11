package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteWarmPoolQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteWarmPoolActionEnum action;
    public GetDeleteWarmPoolQueryParams withAction(GetDeleteWarmPoolActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDeleteWarmPoolQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ForceDelete")
    public Boolean forceDelete;
    public GetDeleteWarmPoolQueryParams withForceDelete(Boolean forceDelete) {
        this.forceDelete = forceDelete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteWarmPoolVersionEnum version;
    public GetDeleteWarmPoolQueryParams withVersion(GetDeleteWarmPoolVersionEnum version) {
        this.version = version;
        return this;
    }
}