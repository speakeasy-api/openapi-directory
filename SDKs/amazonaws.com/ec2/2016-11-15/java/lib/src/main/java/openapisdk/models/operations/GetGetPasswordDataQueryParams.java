package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPasswordDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetPasswordDataActionEnum action;
    public GetGetPasswordDataQueryParams withAction(GetGetPasswordDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetPasswordDataQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetGetPasswordDataQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetPasswordDataVersionEnum version;
    public GetGetPasswordDataQueryParams withVersion(GetGetPasswordDataVersionEnum version) {
        this.version = version;
        return this;
    }
}