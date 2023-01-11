package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSegmentDetectionRequest {
    public GetSegmentDetectionQueryParams queryParams;
    public GetSegmentDetectionRequest withQueryParams(GetSegmentDetectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSegmentDetectionHeaders headers;
    public GetSegmentDetectionRequest withHeaders(GetSegmentDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSegmentDetectionRequest request;
    public GetSegmentDetectionRequest withRequest(openapisdk.models.shared.GetSegmentDetectionRequest request) {
        this.request = request;
        return this;
    }
}