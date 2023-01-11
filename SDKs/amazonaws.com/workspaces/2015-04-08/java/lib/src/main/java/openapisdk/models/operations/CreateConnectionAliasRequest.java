package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectionAliasRequest {
    public CreateConnectionAliasHeaders headers;
    public CreateConnectionAliasRequest withHeaders(CreateConnectionAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateConnectionAliasRequest request;
    public CreateConnectionAliasRequest withRequest(openapisdk.models.shared.CreateConnectionAliasRequest request) {
        this.request = request;
        return this;
    }
}