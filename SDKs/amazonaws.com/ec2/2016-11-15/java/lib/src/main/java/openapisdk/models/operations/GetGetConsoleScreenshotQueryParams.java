package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetConsoleScreenshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetConsoleScreenshotActionEnum action;
    public GetGetConsoleScreenshotQueryParams withAction(GetGetConsoleScreenshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetConsoleScreenshotQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetGetConsoleScreenshotQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetConsoleScreenshotVersionEnum version;
    public GetGetConsoleScreenshotQueryParams withVersion(GetGetConsoleScreenshotVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WakeUp")
    public Boolean wakeUp;
    public GetGetConsoleScreenshotQueryParams withWakeUp(Boolean wakeUp) {
        this.wakeUp = wakeUp;
        return this;
    }
}