package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConformancePackDetailedStatusRequest {
    public GetOrganizationConformancePackDetailedStatusQueryParams queryParams;
    public GetOrganizationConformancePackDetailedStatusRequest withQueryParams(GetOrganizationConformancePackDetailedStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrganizationConformancePackDetailedStatusHeaders headers;
    public GetOrganizationConformancePackDetailedStatusRequest withHeaders(GetOrganizationConformancePackDetailedStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOrganizationConformancePackDetailedStatusRequest request;
    public GetOrganizationConformancePackDetailedStatusRequest withRequest(openapisdk.models.shared.GetOrganizationConformancePackDetailedStatusRequest request) {
        this.request = request;
        return this;
    }
}