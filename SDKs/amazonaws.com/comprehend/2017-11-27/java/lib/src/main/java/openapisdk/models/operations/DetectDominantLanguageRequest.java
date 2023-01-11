package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectDominantLanguageRequest {
    public DetectDominantLanguageHeaders headers;
    public DetectDominantLanguageRequest withHeaders(DetectDominantLanguageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectDominantLanguageRequest request;
    public DetectDominantLanguageRequest withRequest(openapisdk.models.shared.DetectDominantLanguageRequest request) {
        this.request = request;
        return this;
    }
}