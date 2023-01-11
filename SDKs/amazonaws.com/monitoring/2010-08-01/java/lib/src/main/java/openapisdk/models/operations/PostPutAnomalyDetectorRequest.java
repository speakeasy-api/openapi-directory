package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutAnomalyDetectorRequest {
    public PostPutAnomalyDetectorQueryParams queryParams;
    public PostPutAnomalyDetectorRequest withQueryParams(PostPutAnomalyDetectorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutAnomalyDetectorHeaders headers;
    public PostPutAnomalyDetectorRequest withHeaders(PostPutAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutAnomalyDetectorRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}