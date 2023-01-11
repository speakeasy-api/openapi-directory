package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationRequest {
    public CreateOrganizationHeaders headers;
    public CreateOrganizationRequest withHeaders(CreateOrganizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateOrganizationRequest request;
    public CreateOrganizationRequest withRequest(openapisdk.models.shared.CreateOrganizationRequest request) {
        this.request = request;
        return this;
    }
}