package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenerateCredentialReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGenerateCredentialReportActionEnum action;
    public GetGenerateCredentialReportQueryParams withAction(GetGenerateCredentialReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGenerateCredentialReportVersionEnum version;
    public GetGenerateCredentialReportQueryParams withVersion(GetGenerateCredentialReportVersionEnum version) {
        this.version = version;
        return this;
    }
}