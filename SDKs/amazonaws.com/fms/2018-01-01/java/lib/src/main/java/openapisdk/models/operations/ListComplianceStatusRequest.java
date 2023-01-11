package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListComplianceStatusRequest {
    public ListComplianceStatusQueryParams queryParams;
    public ListComplianceStatusRequest withQueryParams(ListComplianceStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListComplianceStatusHeaders headers;
    public ListComplianceStatusRequest withHeaders(ListComplianceStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListComplianceStatusRequest request;
    public ListComplianceStatusRequest withRequest(openapisdk.models.shared.ListComplianceStatusRequest request) {
        this.request = request;
        return this;
    }
}