package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetSerialConsoleAccessStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetSerialConsoleAccessStatusActionEnum action;
    public GetGetSerialConsoleAccessStatusQueryParams withAction(GetGetSerialConsoleAccessStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetSerialConsoleAccessStatusQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetSerialConsoleAccessStatusVersionEnum version;
    public GetGetSerialConsoleAccessStatusQueryParams withVersion(GetGetSerialConsoleAccessStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}