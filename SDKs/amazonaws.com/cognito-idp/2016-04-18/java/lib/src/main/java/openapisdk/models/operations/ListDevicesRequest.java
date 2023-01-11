package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicesRequest {
    public ListDevicesHeaders headers;
    public ListDevicesRequest withHeaders(ListDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDevicesRequest request;
    public ListDevicesRequest withRequest(openapisdk.models.shared.ListDevicesRequest request) {
        this.request = request;
        return this;
    }
}