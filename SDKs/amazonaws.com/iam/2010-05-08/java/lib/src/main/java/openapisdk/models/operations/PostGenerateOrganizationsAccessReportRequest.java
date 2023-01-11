package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGenerateOrganizationsAccessReportRequest {
    public PostGenerateOrganizationsAccessReportQueryParams queryParams;
    public PostGenerateOrganizationsAccessReportRequest withQueryParams(PostGenerateOrganizationsAccessReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGenerateOrganizationsAccessReportHeaders headers;
    public PostGenerateOrganizationsAccessReportRequest withHeaders(PostGenerateOrganizationsAccessReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGenerateOrganizationsAccessReportRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}