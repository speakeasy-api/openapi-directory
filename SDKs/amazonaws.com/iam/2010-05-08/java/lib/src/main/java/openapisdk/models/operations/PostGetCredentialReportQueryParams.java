package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCredentialReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetCredentialReportActionEnum action;
    public PostGetCredentialReportQueryParams withAction(PostGetCredentialReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetCredentialReportVersionEnum version;
    public PostGetCredentialReportQueryParams withVersion(PostGetCredentialReportVersionEnum version) {
        this.version = version;
        return this;
    }
}