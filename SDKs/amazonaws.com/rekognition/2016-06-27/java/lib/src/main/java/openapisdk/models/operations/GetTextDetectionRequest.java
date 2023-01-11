package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextDetectionRequest {
    public GetTextDetectionQueryParams queryParams;
    public GetTextDetectionRequest withQueryParams(GetTextDetectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTextDetectionHeaders headers;
    public GetTextDetectionRequest withHeaders(GetTextDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTextDetectionRequest request;
    public GetTextDetectionRequest withRequest(openapisdk.models.shared.GetTextDetectionRequest request) {
        this.request = request;
        return this;
    }
}