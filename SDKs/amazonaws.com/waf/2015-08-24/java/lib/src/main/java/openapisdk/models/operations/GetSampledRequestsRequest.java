package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSampledRequestsRequest {
    public GetSampledRequestsHeaders headers;
    public GetSampledRequestsRequest withHeaders(GetSampledRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSampledRequestsRequest request;
    public GetSampledRequestsRequest withRequest(openapisdk.models.shared.GetSampledRequestsRequest request) {
        this.request = request;
        return this;
    }
}