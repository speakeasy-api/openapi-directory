package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetOrganizationsAccessReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetOrganizationsAccessReportActionEnum action;
    public GetGetOrganizationsAccessReportQueryParams withAction(GetGetOrganizationsAccessReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=JobId")
    public String jobId;
    public GetGetOrganizationsAccessReportQueryParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetGetOrganizationsAccessReportQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetGetOrganizationsAccessReportQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SortKey")
    public GetGetOrganizationsAccessReportSortKeyEnum sortKey;
    public GetGetOrganizationsAccessReportQueryParams withSortKey(GetGetOrganizationsAccessReportSortKeyEnum sortKey) {
        this.sortKey = sortKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetOrganizationsAccessReportVersionEnum version;
    public GetGetOrganizationsAccessReportQueryParams withVersion(GetGetOrganizationsAccessReportVersionEnum version) {
        this.version = version;
        return this;
    }
}