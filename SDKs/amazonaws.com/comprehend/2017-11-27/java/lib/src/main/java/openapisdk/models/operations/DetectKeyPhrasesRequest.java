package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectKeyPhrasesRequest {
    public DetectKeyPhrasesHeaders headers;
    public DetectKeyPhrasesRequest withHeaders(DetectKeyPhrasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectKeyPhrasesRequest request;
    public DetectKeyPhrasesRequest withRequest(openapisdk.models.shared.DetectKeyPhrasesRequest request) {
        this.request = request;
        return this;
    }
}