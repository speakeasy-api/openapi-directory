package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTextTranslationJobRequest {
    public StartTextTranslationJobHeaders headers;
    public StartTextTranslationJobRequest withHeaders(StartTextTranslationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTextTranslationJobRequest request;
    public StartTextTranslationJobRequest withRequest(openapisdk.models.shared.StartTextTranslationJobRequest request) {
        this.request = request;
        return this;
    }
}