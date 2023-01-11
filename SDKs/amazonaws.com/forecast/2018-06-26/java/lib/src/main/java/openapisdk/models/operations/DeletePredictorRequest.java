package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePredictorRequest {
    public DeletePredictorHeaders headers;
    public DeletePredictorRequest withHeaders(DeletePredictorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePredictorRequest request;
    public DeletePredictorRequest withRequest(openapisdk.models.shared.DeletePredictorRequest request) {
        this.request = request;
        return this;
    }
}