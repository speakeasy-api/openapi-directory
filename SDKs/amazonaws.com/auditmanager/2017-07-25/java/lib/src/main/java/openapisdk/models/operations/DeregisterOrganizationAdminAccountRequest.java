package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterOrganizationAdminAccountRequest {
    public DeregisterOrganizationAdminAccountHeaders headers;
    public DeregisterOrganizationAdminAccountRequest withHeaders(DeregisterOrganizationAdminAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeregisterOrganizationAdminAccountRequestBody request;
    public DeregisterOrganizationAdminAccountRequest withRequest(DeregisterOrganizationAdminAccountRequestBody request) {
        this.request = request;
        return this;
    }
}