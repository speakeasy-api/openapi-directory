package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleConfidentialityUpdateRequest {
    public PrivateArticleConfidentialityUpdatePathParams pathParams;
    public PrivateArticleConfidentialityUpdateRequest withPathParams(PrivateArticleConfidentialityUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfidentialityCreator request;
    public PrivateArticleConfidentialityUpdateRequest withRequest(openapisdk.models.shared.ConfidentialityCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticleConfidentialityUpdateSecurity security;
    public PrivateArticleConfidentialityUpdateRequest withSecurity(PrivateArticleConfidentialityUpdateSecurity security) {
        this.security = security;
        return this;
    }
}