package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLanguageModelRequest {
    public DeleteLanguageModelHeaders headers;
    public DeleteLanguageModelRequest withHeaders(DeleteLanguageModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLanguageModelRequest request;
    public DeleteLanguageModelRequest withRequest(openapisdk.models.shared.DeleteLanguageModelRequest request) {
        this.request = request;
        return this;
    }
}