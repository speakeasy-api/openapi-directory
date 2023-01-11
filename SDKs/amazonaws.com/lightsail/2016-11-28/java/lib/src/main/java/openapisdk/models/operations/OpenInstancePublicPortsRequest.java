package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpenInstancePublicPortsRequest {
    public OpenInstancePublicPortsHeaders headers;
    public OpenInstancePublicPortsRequest withHeaders(OpenInstancePublicPortsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OpenInstancePublicPortsRequest request;
    public OpenInstancePublicPortsRequest withRequest(openapisdk.models.shared.OpenInstancePublicPortsRequest request) {
        this.request = request;
        return this;
    }
}