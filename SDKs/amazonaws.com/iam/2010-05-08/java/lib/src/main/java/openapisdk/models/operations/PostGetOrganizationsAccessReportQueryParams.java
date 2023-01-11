package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetOrganizationsAccessReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetOrganizationsAccessReportActionEnum action;
    public PostGetOrganizationsAccessReportQueryParams withAction(PostGetOrganizationsAccessReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetOrganizationsAccessReportVersionEnum version;
    public PostGetOrganizationsAccessReportQueryParams withVersion(PostGetOrganizationsAccessReportVersionEnum version) {
        this.version = version;
        return this;
    }
}