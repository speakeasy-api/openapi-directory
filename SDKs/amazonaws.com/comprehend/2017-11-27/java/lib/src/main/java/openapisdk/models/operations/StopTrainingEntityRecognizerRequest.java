package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopTrainingEntityRecognizerRequest {
    public StopTrainingEntityRecognizerHeaders headers;
    public StopTrainingEntityRecognizerRequest withHeaders(StopTrainingEntityRecognizerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopTrainingEntityRecognizerRequest request;
    public StopTrainingEntityRecognizerRequest withRequest(openapisdk.models.shared.StopTrainingEntityRecognizerRequest request) {
        this.request = request;
        return this;
    }
}