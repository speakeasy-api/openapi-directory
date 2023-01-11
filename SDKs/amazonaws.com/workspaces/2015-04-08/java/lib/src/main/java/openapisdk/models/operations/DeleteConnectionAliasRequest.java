package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectionAliasRequest {
    public DeleteConnectionAliasHeaders headers;
    public DeleteConnectionAliasRequest withHeaders(DeleteConnectionAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConnectionAliasRequest request;
    public DeleteConnectionAliasRequest withRequest(openapisdk.models.shared.DeleteConnectionAliasRequest request) {
        this.request = request;
        return this;
    }
}