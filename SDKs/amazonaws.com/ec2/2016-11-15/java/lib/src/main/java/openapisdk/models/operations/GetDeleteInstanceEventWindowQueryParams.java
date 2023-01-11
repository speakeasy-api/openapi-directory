package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteInstanceEventWindowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteInstanceEventWindowActionEnum action;
    public GetDeleteInstanceEventWindowQueryParams withAction(GetDeleteInstanceEventWindowActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteInstanceEventWindowQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ForceDelete")
    public Boolean forceDelete;
    public GetDeleteInstanceEventWindowQueryParams withForceDelete(Boolean forceDelete) {
        this.forceDelete = forceDelete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceEventWindowId")
    public String instanceEventWindowId;
    public GetDeleteInstanceEventWindowQueryParams withInstanceEventWindowId(String instanceEventWindowId) {
        this.instanceEventWindowId = instanceEventWindowId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteInstanceEventWindowVersionEnum version;
    public GetDeleteInstanceEventWindowQueryParams withVersion(GetDeleteInstanceEventWindowVersionEnum version) {
        this.version = version;
        return this;
    }
}