package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRegistriesRequest {
    public ListRegistriesQueryParams queryParams;
    public ListRegistriesRequest withQueryParams(ListRegistriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRegistriesHeaders headers;
    public ListRegistriesRequest withHeaders(ListRegistriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRegistriesInput request;
    public ListRegistriesRequest withRequest(openapisdk.models.shared.ListRegistriesInput request) {
        this.request = request;
        return this;
    }
}