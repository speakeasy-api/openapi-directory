package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateWebsiteAuthorizationProviderRequest {
    public AssociateWebsiteAuthorizationProviderHeaders headers;
    public AssociateWebsiteAuthorizationProviderRequest withHeaders(AssociateWebsiteAuthorizationProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateWebsiteAuthorizationProviderRequestBody request;
    public AssociateWebsiteAuthorizationProviderRequest withRequest(AssociateWebsiteAuthorizationProviderRequestBody request) {
        this.request = request;
        return this;
    }
}