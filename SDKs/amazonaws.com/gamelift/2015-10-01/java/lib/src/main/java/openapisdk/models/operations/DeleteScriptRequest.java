package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScriptRequest {
    public DeleteScriptHeaders headers;
    public DeleteScriptRequest withHeaders(DeleteScriptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteScriptInput request;
    public DeleteScriptRequest withRequest(openapisdk.models.shared.DeleteScriptInput request) {
        this.request = request;
        return this;
    }
}