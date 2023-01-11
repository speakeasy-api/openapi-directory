package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetLaunchTemplateDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetLaunchTemplateDataActionEnum action;
    public GetGetLaunchTemplateDataQueryParams withAction(GetGetLaunchTemplateDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetLaunchTemplateDataQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetGetLaunchTemplateDataQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetLaunchTemplateDataVersionEnum version;
    public GetGetLaunchTemplateDataQueryParams withVersion(GetGetLaunchTemplateDataVersionEnum version) {
        this.version = version;
        return this;
    }
}