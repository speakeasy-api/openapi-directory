package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAliasRequest {
    public DeleteAliasHeaders headers;
    public DeleteAliasRequest withHeaders(DeleteAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAliasRequest request;
    public DeleteAliasRequest withRequest(openapisdk.models.shared.DeleteAliasRequest request) {
        this.request = request;
        return this;
    }
}