package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResolveAliasRequest {
    public ResolveAliasHeaders headers;
    public ResolveAliasRequest withHeaders(ResolveAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResolveAliasInput request;
    public ResolveAliasRequest withRequest(openapisdk.models.shared.ResolveAliasInput request) {
        this.request = request;
        return this;
    }
}