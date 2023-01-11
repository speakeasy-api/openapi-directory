package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServicesRequest {
    public ListServicesQueryParams queryParams;
    public ListServicesRequest withQueryParams(ListServicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServicesHeaders headers;
    public ListServicesRequest withHeaders(ListServicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServicesRequest request;
    public ListServicesRequest withRequest(openapisdk.models.shared.ListServicesRequest request) {
        this.request = request;
        return this;
    }
}