package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutInstancePublicPortsRequest {
    public PutInstancePublicPortsHeaders headers;
    public PutInstancePublicPortsRequest withHeaders(PutInstancePublicPortsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutInstancePublicPortsRequest request;
    public PutInstancePublicPortsRequest withRequest(openapisdk.models.shared.PutInstancePublicPortsRequest request) {
        this.request = request;
        return this;
    }
}