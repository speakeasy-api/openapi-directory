package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopTrainingDocumentClassifierRequest {
    public StopTrainingDocumentClassifierHeaders headers;
    public StopTrainingDocumentClassifierRequest withHeaders(StopTrainingDocumentClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopTrainingDocumentClassifierRequest request;
    public StopTrainingDocumentClassifierRequest withRequest(openapisdk.models.shared.StopTrainingDocumentClassifierRequest request) {
        this.request = request;
        return this;
    }
}