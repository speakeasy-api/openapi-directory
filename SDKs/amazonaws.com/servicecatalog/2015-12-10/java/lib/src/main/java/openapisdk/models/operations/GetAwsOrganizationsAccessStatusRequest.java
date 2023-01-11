package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAwsOrganizationsAccessStatusRequest {
    public GetAwsOrganizationsAccessStatusHeaders headers;
    public GetAwsOrganizationsAccessStatusRequest withHeaders(GetAwsOrganizationsAccessStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetAwsOrganizationsAccessStatusRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}