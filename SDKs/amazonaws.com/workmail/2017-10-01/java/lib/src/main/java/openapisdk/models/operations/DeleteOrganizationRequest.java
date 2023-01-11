package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationRequest {
    public DeleteOrganizationHeaders headers;
    public DeleteOrganizationRequest withHeaders(DeleteOrganizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteOrganizationRequest request;
    public DeleteOrganizationRequest withRequest(openapisdk.models.shared.DeleteOrganizationRequest request) {
        this.request = request;
        return this;
    }
}