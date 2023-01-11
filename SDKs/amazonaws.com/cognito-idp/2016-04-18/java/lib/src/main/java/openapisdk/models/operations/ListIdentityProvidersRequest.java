package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIdentityProvidersRequest {
    public ListIdentityProvidersQueryParams queryParams;
    public ListIdentityProvidersRequest withQueryParams(ListIdentityProvidersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIdentityProvidersHeaders headers;
    public ListIdentityProvidersRequest withHeaders(ListIdentityProvidersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListIdentityProvidersRequest request;
    public ListIdentityProvidersRequest withRequest(openapisdk.models.shared.ListIdentityProvidersRequest request) {
        this.request = request;
        return this;
    }
}