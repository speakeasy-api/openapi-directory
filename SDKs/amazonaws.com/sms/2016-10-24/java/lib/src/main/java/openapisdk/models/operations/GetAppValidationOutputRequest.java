package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppValidationOutputRequest {
    public GetAppValidationOutputHeaders headers;
    public GetAppValidationOutputRequest withHeaders(GetAppValidationOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAppValidationOutputRequest request;
    public GetAppValidationOutputRequest withRequest(openapisdk.models.shared.GetAppValidationOutputRequest request) {
        this.request = request;
        return this;
    }
}