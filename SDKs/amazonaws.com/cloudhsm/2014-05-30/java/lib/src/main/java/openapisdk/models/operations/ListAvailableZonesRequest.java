package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailableZonesRequest {
    public ListAvailableZonesHeaders headers;
    public ListAvailableZonesRequest withHeaders(ListAvailableZonesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ListAvailableZonesRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}