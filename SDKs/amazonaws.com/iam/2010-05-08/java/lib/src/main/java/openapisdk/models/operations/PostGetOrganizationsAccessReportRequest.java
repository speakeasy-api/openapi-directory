package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetOrganizationsAccessReportRequest {
    public PostGetOrganizationsAccessReportQueryParams queryParams;
    public PostGetOrganizationsAccessReportRequest withQueryParams(PostGetOrganizationsAccessReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetOrganizationsAccessReportHeaders headers;
    public PostGetOrganizationsAccessReportRequest withHeaders(PostGetOrganizationsAccessReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetOrganizationsAccessReportRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}