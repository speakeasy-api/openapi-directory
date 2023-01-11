package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeywordExtractionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public KeywordExtractionRequestBody request;
    public KeywordExtractionRequest withRequest(KeywordExtractionRequestBody request) {
        this.request = request;
        return this;
    }
}