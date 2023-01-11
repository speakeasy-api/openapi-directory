package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLabelDetectionRequest {
    public GetLabelDetectionQueryParams queryParams;
    public GetLabelDetectionRequest withQueryParams(GetLabelDetectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLabelDetectionHeaders headers;
    public GetLabelDetectionRequest withHeaders(GetLabelDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLabelDetectionRequest request;
    public GetLabelDetectionRequest withRequest(openapisdk.models.shared.GetLabelDetectionRequest request) {
        this.request = request;
        return this;
    }
}