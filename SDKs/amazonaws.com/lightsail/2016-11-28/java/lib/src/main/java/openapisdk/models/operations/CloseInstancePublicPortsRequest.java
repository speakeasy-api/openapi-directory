package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloseInstancePublicPortsRequest {
    public CloseInstancePublicPortsHeaders headers;
    public CloseInstancePublicPortsRequest withHeaders(CloseInstancePublicPortsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CloseInstancePublicPortsRequest request;
    public CloseInstancePublicPortsRequest withRequest(openapisdk.models.shared.CloseInstancePublicPortsRequest request) {
        this.request = request;
        return this;
    }
}