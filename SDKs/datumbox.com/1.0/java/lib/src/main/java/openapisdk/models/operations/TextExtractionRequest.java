package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TextExtractionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public TextExtractionRequestBody request;
    public TextExtractionRequest withRequest(TextExtractionRequestBody request) {
        this.request = request;
        return this;
    }
}