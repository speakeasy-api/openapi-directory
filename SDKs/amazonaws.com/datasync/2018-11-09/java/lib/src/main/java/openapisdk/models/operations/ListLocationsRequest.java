package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLocationsRequest {
    public ListLocationsQueryParams queryParams;
    public ListLocationsRequest withQueryParams(ListLocationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLocationsHeaders headers;
    public ListLocationsRequest withHeaders(ListLocationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLocationsRequest request;
    public ListLocationsRequest withRequest(openapisdk.models.shared.ListLocationsRequest request) {
        this.request = request;
        return this;
    }
}