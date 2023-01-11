package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLunaClientRequest {
    public CreateLunaClientHeaders headers;
    public CreateLunaClientRequest withHeaders(CreateLunaClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLunaClientRequest request;
    public CreateLunaClientRequest withRequest(openapisdk.models.shared.CreateLunaClientRequest request) {
        this.request = request;
        return this;
    }
}