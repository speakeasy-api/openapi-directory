package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceInstancesRequest {
    public ListServiceInstancesQueryParams queryParams;
    public ListServiceInstancesRequest withQueryParams(ListServiceInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceInstancesHeaders headers;
    public ListServiceInstancesRequest withHeaders(ListServiceInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServiceInstancesInput request;
    public ListServiceInstancesRequest withRequest(openapisdk.models.shared.ListServiceInstancesInput request) {
        this.request = request;
        return this;
    }
}