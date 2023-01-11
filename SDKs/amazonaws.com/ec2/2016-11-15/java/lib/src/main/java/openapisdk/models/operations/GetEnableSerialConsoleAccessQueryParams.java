package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableSerialConsoleAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableSerialConsoleAccessActionEnum action;
    public GetEnableSerialConsoleAccessQueryParams withAction(GetEnableSerialConsoleAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetEnableSerialConsoleAccessQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableSerialConsoleAccessVersionEnum version;
    public GetEnableSerialConsoleAccessQueryParams withVersion(GetEnableSerialConsoleAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}