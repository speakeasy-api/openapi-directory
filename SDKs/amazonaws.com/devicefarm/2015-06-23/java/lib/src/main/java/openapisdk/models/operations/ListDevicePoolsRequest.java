package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicePoolsRequest {
    public ListDevicePoolsQueryParams queryParams;
    public ListDevicePoolsRequest withQueryParams(ListDevicePoolsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDevicePoolsHeaders headers;
    public ListDevicePoolsRequest withHeaders(ListDevicePoolsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDevicePoolsRequest request;
    public ListDevicePoolsRequest withRequest(openapisdk.models.shared.ListDevicePoolsRequest request) {
        this.request = request;
        return this;
    }
}