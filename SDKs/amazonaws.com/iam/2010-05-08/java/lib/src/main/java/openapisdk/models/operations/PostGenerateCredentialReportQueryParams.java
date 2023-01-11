package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGenerateCredentialReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGenerateCredentialReportActionEnum action;
    public PostGenerateCredentialReportQueryParams withAction(PostGenerateCredentialReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGenerateCredentialReportVersionEnum version;
    public PostGenerateCredentialReportQueryParams withVersion(PostGenerateCredentialReportVersionEnum version) {
        this.version = version;
        return this;
    }
}