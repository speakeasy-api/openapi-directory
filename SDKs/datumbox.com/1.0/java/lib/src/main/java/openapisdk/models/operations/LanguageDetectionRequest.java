package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDetectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public LanguageDetectionRequestBody request;
    public LanguageDetectionRequest withRequest(LanguageDetectionRequestBody request) {
        this.request = request;
        return this;
    }
}