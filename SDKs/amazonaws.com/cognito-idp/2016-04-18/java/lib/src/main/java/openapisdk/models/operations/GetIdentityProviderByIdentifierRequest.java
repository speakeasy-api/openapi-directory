package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIdentityProviderByIdentifierRequest {
    public GetIdentityProviderByIdentifierHeaders headers;
    public GetIdentityProviderByIdentifierRequest withHeaders(GetIdentityProviderByIdentifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIdentityProviderByIdentifierRequest request;
    public GetIdentityProviderByIdentifierRequest withRequest(openapisdk.models.shared.GetIdentityProviderByIdentifierRequest request) {
        this.request = request;
        return this;
    }
}