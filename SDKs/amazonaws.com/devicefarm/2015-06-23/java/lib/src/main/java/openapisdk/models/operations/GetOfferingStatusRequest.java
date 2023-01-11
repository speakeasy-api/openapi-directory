package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingStatusRequest {
    public GetOfferingStatusQueryParams queryParams;
    public GetOfferingStatusRequest withQueryParams(GetOfferingStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOfferingStatusHeaders headers;
    public GetOfferingStatusRequest withHeaders(GetOfferingStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOfferingStatusRequest request;
    public GetOfferingStatusRequest withRequest(openapisdk.models.shared.GetOfferingStatusRequest request) {
        this.request = request;
        return this;
    }
}