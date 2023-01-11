package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SnsPostSnsPostRequest {
    public SnsPostSnsPostHeaders headers;
    public SnsPostSnsPostRequest withHeaders(SnsPostSnsPostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnsMessageRequest request;
    public SnsPostSnsPostRequest withRequest(openapisdk.models.shared.SnsMessageRequest request) {
        this.request = request;
        return this;
    }
}