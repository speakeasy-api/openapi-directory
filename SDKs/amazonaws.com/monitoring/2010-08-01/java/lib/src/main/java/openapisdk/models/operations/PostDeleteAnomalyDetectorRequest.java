package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAnomalyDetectorRequest {
    public PostDeleteAnomalyDetectorQueryParams queryParams;
    public PostDeleteAnomalyDetectorRequest withQueryParams(PostDeleteAnomalyDetectorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteAnomalyDetectorHeaders headers;
    public PostDeleteAnomalyDetectorRequest withHeaders(PostDeleteAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAnomalyDetectorRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}