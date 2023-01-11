package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSendDiagnosticInterruptQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSendDiagnosticInterruptActionEnum action;
    public GetSendDiagnosticInterruptQueryParams withAction(GetSendDiagnosticInterruptActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetSendDiagnosticInterruptQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetSendDiagnosticInterruptQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSendDiagnosticInterruptVersionEnum version;
    public GetSendDiagnosticInterruptQueryParams withVersion(GetSendDiagnosticInterruptVersionEnum version) {
        this.version = version;
        return this;
    }
}