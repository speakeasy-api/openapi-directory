package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableSerialConsoleAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableSerialConsoleAccessActionEnum action;
    public GetDisableSerialConsoleAccessQueryParams withAction(GetDisableSerialConsoleAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisableSerialConsoleAccessQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableSerialConsoleAccessVersionEnum version;
    public GetDisableSerialConsoleAccessQueryParams withVersion(GetDisableSerialConsoleAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}