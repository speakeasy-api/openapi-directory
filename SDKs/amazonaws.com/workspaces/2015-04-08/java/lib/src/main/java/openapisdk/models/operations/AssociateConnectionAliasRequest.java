package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateConnectionAliasRequest {
    public AssociateConnectionAliasHeaders headers;
    public AssociateConnectionAliasRequest withHeaders(AssociateConnectionAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateConnectionAliasRequest request;
    public AssociateConnectionAliasRequest withRequest(openapisdk.models.shared.AssociateConnectionAliasRequest request) {
        this.request = request;
        return this;
    }
}