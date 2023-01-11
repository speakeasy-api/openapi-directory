package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendDiagnosticInterruptQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendDiagnosticInterruptActionEnum action;
    public PostSendDiagnosticInterruptQueryParams withAction(PostSendDiagnosticInterruptActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendDiagnosticInterruptVersionEnum version;
    public PostSendDiagnosticInterruptQueryParams withVersion(PostSendDiagnosticInterruptVersionEnum version) {
        this.version = version;
        return this;
    }
}