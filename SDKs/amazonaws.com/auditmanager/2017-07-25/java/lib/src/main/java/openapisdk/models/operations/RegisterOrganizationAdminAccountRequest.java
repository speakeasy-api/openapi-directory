package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterOrganizationAdminAccountRequest {
    public RegisterOrganizationAdminAccountHeaders headers;
    public RegisterOrganizationAdminAccountRequest withHeaders(RegisterOrganizationAdminAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterOrganizationAdminAccountRequestBody request;
    public RegisterOrganizationAdminAccountRequest withRequest(RegisterOrganizationAdminAccountRequestBody request) {
        this.request = request;
        return this;
    }
}