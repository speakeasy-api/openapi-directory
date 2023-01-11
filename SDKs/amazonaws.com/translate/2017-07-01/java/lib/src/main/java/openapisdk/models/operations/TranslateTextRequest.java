package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateTextRequest {
    public TranslateTextHeaders headers;
    public TranslateTextRequest withHeaders(TranslateTextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TranslateTextRequest request;
    public TranslateTextRequest withRequest(openapisdk.models.shared.TranslateTextRequest request) {
        this.request = request;
        return this;
    }
}