package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDetectDominantLanguageRequest {
    public BatchDetectDominantLanguageHeaders headers;
    public BatchDetectDominantLanguageRequest withHeaders(BatchDetectDominantLanguageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDetectDominantLanguageRequest request;
    public BatchDetectDominantLanguageRequest withRequest(openapisdk.models.shared.BatchDetectDominantLanguageRequest request) {
        this.request = request;
        return this;
    }
}