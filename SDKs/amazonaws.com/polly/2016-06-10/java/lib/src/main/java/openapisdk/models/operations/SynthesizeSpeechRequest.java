package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SynthesizeSpeechRequest {
    public SynthesizeSpeechHeaders headers;
    public SynthesizeSpeechRequest withHeaders(SynthesizeSpeechHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SynthesizeSpeechRequestBody request;
    public SynthesizeSpeechRequest withRequest(SynthesizeSpeechRequestBody request) {
        this.request = request;
        return this;
    }
}