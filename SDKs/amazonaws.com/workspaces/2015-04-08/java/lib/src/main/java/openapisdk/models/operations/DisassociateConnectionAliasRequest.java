package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateConnectionAliasRequest {
    public DisassociateConnectionAliasHeaders headers;
    public DisassociateConnectionAliasRequest withHeaders(DisassociateConnectionAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateConnectionAliasRequest request;
    public DisassociateConnectionAliasRequest withRequest(openapisdk.models.shared.DisassociateConnectionAliasRequest request) {
        this.request = request;
        return this;
    }
}