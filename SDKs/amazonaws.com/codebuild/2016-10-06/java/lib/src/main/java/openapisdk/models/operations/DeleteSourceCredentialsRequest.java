package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSourceCredentialsRequest {
    public DeleteSourceCredentialsHeaders headers;
    public DeleteSourceCredentialsRequest withHeaders(DeleteSourceCredentialsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSourceCredentialsInput request;
    public DeleteSourceCredentialsRequest withRequest(openapisdk.models.shared.DeleteSourceCredentialsInput request) {
        this.request = request;
        return this;
    }
}