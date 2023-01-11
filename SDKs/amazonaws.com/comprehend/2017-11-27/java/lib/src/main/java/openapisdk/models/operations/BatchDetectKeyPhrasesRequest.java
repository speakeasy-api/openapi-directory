package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDetectKeyPhrasesRequest {
    public BatchDetectKeyPhrasesHeaders headers;
    public BatchDetectKeyPhrasesRequest withHeaders(BatchDetectKeyPhrasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDetectKeyPhrasesRequest request;
    public BatchDetectKeyPhrasesRequest withRequest(openapisdk.models.shared.BatchDetectKeyPhrasesRequest request) {
        this.request = request;
        return this;
    }
}