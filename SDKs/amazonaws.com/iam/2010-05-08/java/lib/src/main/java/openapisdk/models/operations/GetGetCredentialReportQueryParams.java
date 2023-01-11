package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetCredentialReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetCredentialReportActionEnum action;
    public GetGetCredentialReportQueryParams withAction(GetGetCredentialReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetCredentialReportVersionEnum version;
    public GetGetCredentialReportQueryParams withVersion(GetGetCredentialReportVersionEnum version) {
        this.version = version;
        return this;
    }
}