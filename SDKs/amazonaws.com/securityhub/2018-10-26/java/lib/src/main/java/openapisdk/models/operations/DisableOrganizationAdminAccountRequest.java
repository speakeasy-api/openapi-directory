package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableOrganizationAdminAccountRequest {
    public DisableOrganizationAdminAccountHeaders headers;
    public DisableOrganizationAdminAccountRequest withHeaders(DisableOrganizationAdminAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisableOrganizationAdminAccountRequestBody request;
    public DisableOrganizationAdminAccountRequest withRequest(DisableOrganizationAdminAccountRequestBody request) {
        this.request = request;
        return this;
    }
}