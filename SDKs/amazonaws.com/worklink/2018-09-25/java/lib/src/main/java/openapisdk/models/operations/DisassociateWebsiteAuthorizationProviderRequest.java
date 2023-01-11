package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateWebsiteAuthorizationProviderRequest {
    public DisassociateWebsiteAuthorizationProviderHeaders headers;
    public DisassociateWebsiteAuthorizationProviderRequest withHeaders(DisassociateWebsiteAuthorizationProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateWebsiteAuthorizationProviderRequestBody request;
    public DisassociateWebsiteAuthorizationProviderRequest withRequest(DisassociateWebsiteAuthorizationProviderRequestBody request) {
        this.request = request;
        return this;
    }
}