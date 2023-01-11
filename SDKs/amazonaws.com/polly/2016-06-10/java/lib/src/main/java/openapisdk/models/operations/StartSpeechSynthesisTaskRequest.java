package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSpeechSynthesisTaskRequest {
    public StartSpeechSynthesisTaskHeaders headers;
    public StartSpeechSynthesisTaskRequest withHeaders(StartSpeechSynthesisTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartSpeechSynthesisTaskRequestBody request;
    public StartSpeechSynthesisTaskRequest withRequest(StartSpeechSynthesisTaskRequestBody request) {
        this.request = request;
        return this;
    }
}