package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicesRequest {
    public ListDevicesQueryParams queryParams;
    public ListDevicesRequest withQueryParams(ListDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDevicesHeaders headers;
    public ListDevicesRequest withHeaders(ListDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListDevicesRequestBody request;
    public ListDevicesRequest withRequest(ListDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}