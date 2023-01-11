package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDomainsRequest {
    public ListDomainsQueryParams queryParams;
    public ListDomainsRequest withQueryParams(ListDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDomainsHeaders headers;
    public ListDomainsRequest withHeaders(ListDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListDomainsRequestBody request;
    public ListDomainsRequest withRequest(ListDomainsRequestBody request) {
        this.request = request;
        return this;
    }
}