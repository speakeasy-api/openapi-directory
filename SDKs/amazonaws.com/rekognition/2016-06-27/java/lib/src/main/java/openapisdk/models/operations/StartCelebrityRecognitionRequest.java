package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartCelebrityRecognitionRequest {
    public StartCelebrityRecognitionHeaders headers;
    public StartCelebrityRecognitionRequest withHeaders(StartCelebrityRecognitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartCelebrityRecognitionRequest request;
    public StartCelebrityRecognitionRequest withRequest(openapisdk.models.shared.StartCelebrityRecognitionRequest request) {
        this.request = request;
        return this;
    }
}