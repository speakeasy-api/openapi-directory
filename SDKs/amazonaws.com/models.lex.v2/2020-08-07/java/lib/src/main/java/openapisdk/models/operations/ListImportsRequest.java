package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImportsRequest {
    public ListImportsQueryParams queryParams;
    public ListImportsRequest withQueryParams(ListImportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImportsHeaders headers;
    public ListImportsRequest withHeaders(ListImportsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListImportsRequestBody request;
    public ListImportsRequest withRequest(ListImportsRequestBody request) {
        this.request = request;
        return this;
    }
}