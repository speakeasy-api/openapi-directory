package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopTextTranslationJobRequest {
    public StopTextTranslationJobHeaders headers;
    public StopTextTranslationJobRequest withHeaders(StopTextTranslationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopTextTranslationJobRequest request;
    public StopTextTranslationJobRequest withRequest(openapisdk.models.shared.StopTextTranslationJobRequest request) {
        this.request = request;
        return this;
    }
}