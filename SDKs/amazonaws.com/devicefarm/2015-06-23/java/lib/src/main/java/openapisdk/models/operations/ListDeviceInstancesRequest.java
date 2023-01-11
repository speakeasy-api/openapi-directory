package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeviceInstancesRequest {
    public ListDeviceInstancesHeaders headers;
    public ListDeviceInstancesRequest withHeaders(ListDeviceInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDeviceInstancesRequest request;
    public ListDeviceInstancesRequest withRequest(openapisdk.models.shared.ListDeviceInstancesRequest request) {
        this.request = request;
        return this;
    }
}