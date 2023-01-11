package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableAwsOrganizationsAccessRequest {
    public DisableAwsOrganizationsAccessHeaders headers;
    public DisableAwsOrganizationsAccessRequest withHeaders(DisableAwsOrganizationsAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DisableAwsOrganizationsAccessRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}