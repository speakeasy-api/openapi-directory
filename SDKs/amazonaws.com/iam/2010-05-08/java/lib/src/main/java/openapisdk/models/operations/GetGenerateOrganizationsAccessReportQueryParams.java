package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenerateOrganizationsAccessReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGenerateOrganizationsAccessReportActionEnum action;
    public GetGenerateOrganizationsAccessReportQueryParams withAction(GetGenerateOrganizationsAccessReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EntityPath")
    public String entityPath;
    public GetGenerateOrganizationsAccessReportQueryParams withEntityPath(String entityPath) {
        this.entityPath = entityPath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OrganizationsPolicyId")
    public String organizationsPolicyId;
    public GetGenerateOrganizationsAccessReportQueryParams withOrganizationsPolicyId(String organizationsPolicyId) {
        this.organizationsPolicyId = organizationsPolicyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGenerateOrganizationsAccessReportVersionEnum version;
    public GetGenerateOrganizationsAccessReportQueryParams withVersion(GetGenerateOrganizationsAccessReportVersionEnum version) {
        this.version = version;
        return this;
    }
}