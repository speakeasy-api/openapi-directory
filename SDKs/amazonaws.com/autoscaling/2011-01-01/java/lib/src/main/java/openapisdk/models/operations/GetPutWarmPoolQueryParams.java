package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutWarmPoolQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutWarmPoolActionEnum action;
    public GetPutWarmPoolQueryParams withAction(GetPutWarmPoolActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetPutWarmPoolQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxGroupPreparedCapacity")
    public Long maxGroupPreparedCapacity;
    public GetPutWarmPoolQueryParams withMaxGroupPreparedCapacity(Long maxGroupPreparedCapacity) {
        this.maxGroupPreparedCapacity = maxGroupPreparedCapacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MinSize")
    public Long minSize;
    public GetPutWarmPoolQueryParams withMinSize(Long minSize) {
        this.minSize = minSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PoolState")
    public GetPutWarmPoolPoolStateEnum poolState;
    public GetPutWarmPoolQueryParams withPoolState(GetPutWarmPoolPoolStateEnum poolState) {
        this.poolState = poolState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutWarmPoolVersionEnum version;
    public GetPutWarmPoolQueryParams withVersion(GetPutWarmPoolVersionEnum version) {
        this.version = version;
        return this;
    }
}