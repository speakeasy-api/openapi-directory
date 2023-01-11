package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScriptRequest {
    public CreateScriptHeaders headers;
    public CreateScriptRequest withHeaders(CreateScriptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateScriptRequest request;
    public CreateScriptRequest withRequest(openapisdk.models.shared.CreateScriptRequest request) {
        this.request = request;
        return this;
    }
}