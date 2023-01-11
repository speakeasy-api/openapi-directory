package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPrincipalsRequest {
    public ListPrincipalsQueryParams queryParams;
    public ListPrincipalsRequest withQueryParams(ListPrincipalsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPrincipalsHeaders headers;
    public ListPrincipalsRequest withHeaders(ListPrincipalsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListPrincipalsRequestBody request;
    public ListPrincipalsRequest withRequest(ListPrincipalsRequestBody request) {
        this.request = request;
        return this;
    }
}