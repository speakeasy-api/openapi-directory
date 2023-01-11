package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableOrganizationAdminAccountRequest {
    public EnableOrganizationAdminAccountHeaders headers;
    public EnableOrganizationAdminAccountRequest withHeaders(EnableOrganizationAdminAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnableOrganizationAdminAccountRequestBody request;
    public EnableOrganizationAdminAccountRequest withRequest(EnableOrganizationAdminAccountRequestBody request) {
        this.request = request;
        return this;
    }
}