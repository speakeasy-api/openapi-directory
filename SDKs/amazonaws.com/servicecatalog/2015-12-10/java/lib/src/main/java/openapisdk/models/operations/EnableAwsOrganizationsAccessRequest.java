package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableAwsOrganizationsAccessRequest {
    public EnableAwsOrganizationsAccessHeaders headers;
    public EnableAwsOrganizationsAccessRequest withHeaders(EnableAwsOrganizationsAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public EnableAwsOrganizationsAccessRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}