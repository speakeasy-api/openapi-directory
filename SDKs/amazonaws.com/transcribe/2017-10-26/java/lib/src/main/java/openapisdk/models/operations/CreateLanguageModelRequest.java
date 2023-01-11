package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLanguageModelRequest {
    public CreateLanguageModelHeaders headers;
    public CreateLanguageModelRequest withHeaders(CreateLanguageModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLanguageModelRequest request;
    public CreateLanguageModelRequest withRequest(openapisdk.models.shared.CreateLanguageModelRequest request) {
        this.request = request;
        return this;
    }
}