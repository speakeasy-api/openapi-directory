package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebsiteAuthorizationProvidersRequest {
    public ListWebsiteAuthorizationProvidersQueryParams queryParams;
    public ListWebsiteAuthorizationProvidersRequest withQueryParams(ListWebsiteAuthorizationProvidersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWebsiteAuthorizationProvidersHeaders headers;
    public ListWebsiteAuthorizationProvidersRequest withHeaders(ListWebsiteAuthorizationProvidersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListWebsiteAuthorizationProvidersRequestBody request;
    public ListWebsiteAuthorizationProvidersRequest withRequest(ListWebsiteAuthorizationProvidersRequestBody request) {
        this.request = request;
        return this;
    }
}