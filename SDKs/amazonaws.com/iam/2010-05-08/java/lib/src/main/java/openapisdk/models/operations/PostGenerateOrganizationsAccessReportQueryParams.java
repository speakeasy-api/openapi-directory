package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGenerateOrganizationsAccessReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGenerateOrganizationsAccessReportActionEnum action;
    public PostGenerateOrganizationsAccessReportQueryParams withAction(PostGenerateOrganizationsAccessReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGenerateOrganizationsAccessReportVersionEnum version;
    public PostGenerateOrganizationsAccessReportQueryParams withVersion(PostGenerateOrganizationsAccessReportVersionEnum version) {
        this.version = version;
        return this;
    }
}