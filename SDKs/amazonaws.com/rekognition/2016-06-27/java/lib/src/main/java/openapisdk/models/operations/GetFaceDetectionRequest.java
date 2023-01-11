package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFaceDetectionRequest {
    public GetFaceDetectionQueryParams queryParams;
    public GetFaceDetectionRequest withQueryParams(GetFaceDetectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFaceDetectionHeaders headers;
    public GetFaceDetectionRequest withHeaders(GetFaceDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFaceDetectionRequest request;
    public GetFaceDetectionRequest withRequest(openapisdk.models.shared.GetFaceDetectionRequest request) {
        this.request = request;
        return this;
    }
}