package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScriptRequest {
    public UpdateScriptHeaders headers;
    public UpdateScriptRequest withHeaders(UpdateScriptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateScriptInput request;
    public UpdateScriptRequest withRequest(openapisdk.models.shared.UpdateScriptInput request) {
        this.request = request;
        return this;
    }
}