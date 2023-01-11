package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrganizationConformancePackRequest {
    public PutOrganizationConformancePackHeaders headers;
    public PutOrganizationConformancePackRequest withHeaders(PutOrganizationConformancePackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutOrganizationConformancePackRequest request;
    public PutOrganizationConformancePackRequest withRequest(openapisdk.models.shared.PutOrganizationConformancePackRequest request) {
        this.request = request;
        return this;
    }
}