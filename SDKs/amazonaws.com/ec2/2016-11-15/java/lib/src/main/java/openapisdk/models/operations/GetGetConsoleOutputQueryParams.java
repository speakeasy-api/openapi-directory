package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetConsoleOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetConsoleOutputActionEnum action;
    public GetGetConsoleOutputQueryParams withAction(GetGetConsoleOutputActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetConsoleOutputQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetGetConsoleOutputQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Latest")
    public Boolean latest;
    public GetGetConsoleOutputQueryParams withLatest(Boolean latest) {
        this.latest = latest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetConsoleOutputVersionEnum version;
    public GetGetConsoleOutputQueryParams withVersion(GetGetConsoleOutputVersionEnum version) {
        this.version = version;
        return this;
    }
}