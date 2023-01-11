package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClustersRequest {
    public ListClustersQueryParams queryParams;
    public ListClustersRequest withQueryParams(ListClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListClustersHeaders headers;
    public ListClustersRequest withHeaders(ListClustersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListClustersRequest request;
    public ListClustersRequest withRequest(openapisdk.models.shared.ListClustersRequest request) {
        this.request = request;
        return this;
    }
}