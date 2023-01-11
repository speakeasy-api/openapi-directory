package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationConformancePackRequest {
    public DeleteOrganizationConformancePackHeaders headers;
    public DeleteOrganizationConformancePackRequest withHeaders(DeleteOrganizationConformancePackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteOrganizationConformancePackRequest request;
    public DeleteOrganizationConformancePackRequest withRequest(openapisdk.models.shared.DeleteOrganizationConformancePackRequest request) {
        this.request = request;
        return this;
    }
}