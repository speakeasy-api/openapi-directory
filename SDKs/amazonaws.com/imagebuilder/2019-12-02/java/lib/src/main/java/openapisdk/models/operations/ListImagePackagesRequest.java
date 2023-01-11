package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImagePackagesRequest {
    public ListImagePackagesQueryParams queryParams;
    public ListImagePackagesRequest withQueryParams(ListImagePackagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImagePackagesHeaders headers;
    public ListImagePackagesRequest withHeaders(ListImagePackagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListImagePackagesRequestBody request;
    public ListImagePackagesRequest withRequest(ListImagePackagesRequestBody request) {
        this.request = request;
        return this;
    }
}