package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetsRequest {
    public ListDatasetsQueryParams queryParams;
    public ListDatasetsRequest withQueryParams(ListDatasetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatasetsHeaders headers;
    public ListDatasetsRequest withHeaders(ListDatasetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDatasetsRequest request;
    public ListDatasetsRequest withRequest(openapisdk.models.shared.ListDatasetsRequest request) {
        this.request = request;
        return this;
    }
}